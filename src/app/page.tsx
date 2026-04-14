import { DifficultyCard } from "@/components/DifficultyCard";
import { StarField } from "@/components/StarField";

export default function Home() {
  return (
    <div className="relative z-10 flex min-h-full flex-1 flex-col">
      <StarField />
      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-16 md:px-8 md:py-24">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-nebula">
            Cosmic Signature
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Cosmic Signature Quiz
          </h1>
          <p className="mt-6 text-base leading-relaxed text-mist-dim md:text-lg">
            How well do you really know Cosmic Signature? This quiz tests your mastery of the
            game&apos;s mechanics, strategies, prizes, and special roles. Whether you are a
            newcomer or a seasoned veteran, see how deep your knowledge goes.
          </p>
        </header>

        <section
          className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3"
          aria-label="Choose difficulty"
        >
          <DifficultyCard difficulty="basic" />
          <DifficultyCard difficulty="medium" />
          <DifficultyCard difficulty="hard" />
        </section>

        <footer className="mt-auto pt-20 text-center text-xs text-mist-dim/70">
          Each question has exactly one correct answer. Order of questions and answers is
          randomized each run.
        </footer>
      </main>
    </div>
  );
}
