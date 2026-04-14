/**
 * Parses cosmic-signature-quiz.md into src/data/questions.json
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
const boldNoNumber = /^\*\*(.+?)\*\*\s*$/;

/** @type {Array<{id:number,question:string,options:{label:"A"|"B"|"C"|"D",text:string}[],correctAnswer:"A"|"B"|"C"|"D",difficulty:"basic"|"medium"|"hard"}>} */
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

    // Continuation of question body (e.g. Q200 bullets, follow-up bold line)
    if (cur.trim() === "") {
      i += 1;
      continue;
    }

    const boldOnly = cur.match(boldNoNumber);
    if (boldOnly && !/^\d+\./.test(boldOnly[1])) {
      questionParts.push(boldOnly[1].trim());
      i += 1;
      continue;
    }

    // Bullet lines part of stem (Q200)
    if (/^\s*-\s+/.test(cur) && !optionLine.test(cur)) {
      questionParts.push(cur.replace(/^\s*-\s+/, "").replace(/^\*\*|\*\*$/g, "").trim());
      i += 1;
      continue;
    }

    // Next numbered question — shouldn't happen before 4 options
    if (questionStart.test(cur)) break;

    i += 1;
  }

  if (options.length !== 4) {
    console.warn(`Question ${id}: expected 4 options, got ${options.length}, skipping`);
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
    options,
    correctAnswer: correct,
    difficulty: difficultyForId(id),
  });
}

questions.sort((a, b) => a.id - b.id);

if (questions.length !== 200) {
  console.warn(`Expected 200 questions, got ${questions.length}`);
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(questions, null, 2), "utf8");
console.log(`Wrote ${questions.length} questions to ${outPath}`);
