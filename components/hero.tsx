export function Hero() {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center sm:py-28">
        <p className="text-5xl" aria-hidden="true">
          🐶🐱
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Cuidado e carinho para quem faz parte da{" "}
          <span className="text-brand">família</span>
        </h1>
        <p className="max-w-xl text-lg text-muted">
          Banho e tosa, veterinário, hotel e tudo o que o seu pet precisa em um
          só lugar, com uma equipe apaixonada por animais.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#contato"
            className="rounded-full bg-brand px-7 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Agendar banho e tosa
          </a>
          <a
            href="#servicos"
            className="rounded-full border border-foreground/20 px-7 py-3 font-medium transition-colors hover:bg-foreground/5"
          >
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  );
}
