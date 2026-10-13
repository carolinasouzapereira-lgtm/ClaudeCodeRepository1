export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Projeto 1</h1>
      <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        Edite{" "}
        <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
          app/page.tsx
        </code>{" "}
        para começar.
      </p>
    </main>
  );
}
