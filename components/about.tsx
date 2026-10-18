const highlights = [
  {
    title: "Equipe certificada",
    description: "Tosadores e veterinários com formação e anos de experiência.",
  },
  {
    title: "Busca e entrega",
    description: "Buscamos e levamos o seu pet em casa, com todo o conforto.",
  },
  {
    title: "Produtos selecionados",
    description: "Só trabalhamos com marcas em que confiamos para os nossos.",
  },
];

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="scroll-mt-20 bg-surface py-20"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2
            id="sobre-titulo"
            className="text-3xl font-semibold tracking-tight"
          >
            Há mais de 10 anos cuidando de quem você ama
          </h2>
          <p className="mt-4 text-muted">
            O Patinhas nasceu do amor pelos animais. Aqui cada pet é tratado
            pelo nome, com paciência e respeito ao seu tempo, para que a visita
            ao petshop seja sempre um momento tranquilo.
          </p>
        </div>
        <ul className="grid gap-6">
          {highlights.map((highlight) => (
            <li key={highlight.title} className="flex gap-4">
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white"
              >
                ✓
              </span>
              <div>
                <h3 className="font-semibold">{highlight.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {highlight.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
