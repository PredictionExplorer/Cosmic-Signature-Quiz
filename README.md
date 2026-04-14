# Cosmic Signature Quiz

A Next.js quiz app for **Cosmic Signature** — mechanics, strategies, prizes, and special roles. Pick **Basic** (50), **Medium** (50), or **Hard** (100). Questions and answer order are shuffled each run; you get instant feedback and a section score at the end.

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) v4
- TypeScript

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Regenerate questions from markdown

If you edit `cosmic-signature-quiz.md`:

```bash
npm run parse-quiz
```

This writes `src/data/questions.json`.

## Deploy on Vercel

1. Push the repo to GitHub (or GitLab / Bitbucket).
2. Import the project in [Vercel](https://vercel.com).
3. Use the default Next.js settings — **Build Command**: `next build`, **Output**: Next.js default.

No environment variables are required.

## License

Private / your choice.
