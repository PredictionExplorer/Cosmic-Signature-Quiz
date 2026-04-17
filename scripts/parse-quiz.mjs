/**
 * Parses cosmic-signature-quiz.md into src/data/questions.json.
 *
 * Expected per-question markdown block:
 *
 *   **123. Question stem...**
 *   - A) Option A text
 *   - B) Option B text
 *   - C) Option C text
 *   - D) Option D text
 *
 *   **Explanation:** Why the correct answer is right (1-3 sentences).
 *   - A) Correct — or Wrong — specific reason.
 *   - B) ...
 *   - C) ...
 *   - D) ...
 *
 * Run: node scripts/parse-quiz.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const mdPath = path.join(root, "cosmic-signature-quiz.md");
const outPath = path.join(root, "src", "data", "questions.json");

const md = fs.readFileSync(mdPath, "utf8");
const lines = md.split(/\r?\n/);

/** @type {Record<number, "A"|"B"|"C"|"D">} */
const answerKey = {};
let pastAnswerKey = false;
for (const line of lines) {
  if (line.includes("## Answer Key")) {
    pastAnswerKey = true;
    continue;
  }
  if (!pastAnswerKey) continue;
  if (!line.trim().startsWith("|")) continue;
  if (/Q\s*\|\s*A/.test(line)) continue;
  if (/^\|[\s-]+\|/.test(line)) continue;

  const cells = line
    .split("|")
    .map((c) => c.trim())
    .filter((c) => c.length > 0);
  for (let i = 0; i + 1 < cells.length; i += 2) {
    const qNum = parseInt(cells[i], 10);
    const letter = cells[i + 1];
    if (!Number.isNaN(qNum) && /^[ABCD]$/.test(letter)) {
      answerKey[qNum] = letter;
    }
  }
}

const questionStart = /^\*\*(\d+)\.\s*(.+?)\*\*\s*$/;
const optionLine = /^\s*-\s*([A-D])\)\s*(.+)$/;
const explanationLine = /^\*\*Explanation:\*\*\s*(.+)$/;

/** @type {Array<{id:number,question:string,options:{label:"A"|"B"|"C"|"D",text:string,rationale:string}[],correctAnswer:"A"|"B"|"C"|"D",difficulty:"basic"|"medium"|"hard",explanation:string}>} */
const questions = [];

function difficultyForId(id) {
  if (id <= 50) return "basic";
  if (id <= 100) return "medium";
  return "hard";
}

let i = 0;
while (i < lines.length) {
  const line = lines[i];
  const startMatch = line.match(questionStart);
  if (!startMatch) {
    i += 1;
    continue;
  }

  const id = parseInt(startMatch[1], 10);
  const questionParts = [startMatch[2].trim()];
  i += 1;

  /** @type {{label:"A"|"B"|"C"|"D",text:string}[]} */
  const options = [];

  // Consume question stem continuations and the 4 options.
  while (i < lines.length) {
    const cur = lines[i];
    const opt = cur.match(optionLine);
    if (opt) {
      options.push({
        label: /** @type {"A"|"B"|"C"|"D"} */ (opt[1]),
        text: opt[2].trim(),
      });
      i += 1;
      if (options.length === 4) break;
      continue;
    }

    if (cur.trim() === "") {
      i += 1;
      continue;
    }

    if (options.length === 0) {
      // Still collecting the stem. Bullet lines that aren't options become stem paragraphs.
      if (/^\s*-\s+/.test(cur)) {
        questionParts.push(
          cur.replace(/^\s*-\s+/, "").replace(/^\*\*|\*\*$/g, "").trim(),
        );
        i += 1;
        continue;
      }
      if (/^\*\*(.+?)\*\*\s*$/.test(cur) && !/^\*\*\d+\./.test(cur)) {
        questionParts.push(cur.replace(/^\*\*|\*\*$/g, "").trim());
        i += 1;
        continue;
      }
    }

    if (questionStart.test(cur)) break;

    i += 1;
  }

  if (options.length !== 4) {
    console.warn(`Question ${id}: expected 4 options, got ${options.length}, skipping`);
    continue;
  }

  // Now consume the explanation block:
  //   **Explanation:** ...
  //   - A) ...
  //   - B) ...
  //   - C) ...
  //   - D) ...
  let explanation = "";
  /** @type {Record<"A"|"B"|"C"|"D",string>} */
  const rationales = { A: "", B: "", C: "", D: "" };
  const collectedRationaleLabels = new Set();

  while (i < lines.length) {
    const cur = lines[i];
    if (questionStart.test(cur)) break;

    const exp = cur.match(explanationLine);
    if (exp) {
      explanation = exp[1].trim();
      i += 1;
      continue;
    }

    const opt = cur.match(optionLine);
    if (opt) {
      const label = /** @type {"A"|"B"|"C"|"D"} */ (opt[1]);
      rationales[label] = opt[2].trim();
      collectedRationaleLabels.add(label);
      i += 1;
      if (collectedRationaleLabels.size === 4) break;
      continue;
    }

    i += 1;
  }

  if (!explanation) {
    console.warn(`Question ${id}: missing **Explanation:** line`);
    continue;
  }

  const missingRationales = ["A", "B", "C", "D"].filter(
    (l) => !collectedRationaleLabels.has(l),
  );
  if (missingRationales.length > 0) {
    console.warn(
      `Question ${id}: missing rationale(s) for ${missingRationales.join(", ")}`,
    );
    continue;
  }

  const correct = answerKey[id];
  if (!correct) {
    console.warn(`Question ${id}: missing answer key`);
    continue;
  }

  questions.push({
    id,
    question: questionParts.join("\n\n"),
    options: options.map((o) => ({ ...o, rationale: rationales[o.label] })),
    correctAnswer: correct,
    difficulty: difficultyForId(id),
    explanation,
  });
}

questions.sort((a, b) => a.id - b.id);

const expectedTotal = 200;
if (questions.length !== expectedTotal) {
  console.warn(`Expected ${expectedTotal} questions, got ${questions.length}`);
  if (questions.length < expectedTotal) {
    const ids = new Set(questions.map((q) => q.id));
    const missing = [];
    for (let k = 1; k <= expectedTotal; k += 1) {
      if (!ids.has(k)) missing.push(k);
    }
    if (missing.length > 0) {
      console.warn(`Missing IDs: ${missing.join(", ")}`);
    }
  }
}

// Structural validation for every question that made it in.
for (const q of questions) {
  if (q.options.length !== 4) {
    throw new Error(`Question ${q.id}: options.length !== 4`);
  }
  for (const o of q.options) {
    if (!o.rationale) {
      throw new Error(`Question ${q.id} option ${o.label}: empty rationale`);
    }
  }
  if (!q.explanation) {
    throw new Error(`Question ${q.id}: empty explanation`);
  }
  const letters = q.options.map((o) => o.label).sort().join("");
  if (letters !== "ABCD") {
    throw new Error(`Question ${q.id}: option labels must be A,B,C,D — got ${letters}`);
  }
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(questions, null, 2), "utf8");
console.log(`Wrote ${questions.length} questions to ${outPath}`);
