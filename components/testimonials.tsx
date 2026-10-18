const testimonials = [
  {
    quote:
      "A Mel volta do banho feliz e cheirosa. Dá para ver que é tratada com carinho.",
    author: "Juliana, tutora da Mel",
  },
  {
    quote:
      "Deixei o Thor no hotel por uma semana e recebi fotos todos os dias. Recomendo!",
    author: "Rafael, tutor do Thor",
  },
  {
    quote:
      "Atendimento veterinário excelente, explicaram tudo com muita calma.",
    author: "Beatriz, tutora da Nina",
  },
];

export function Testimonials() {
  return (
    <section aria-labelledby="depoimentos-titulo" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="depoimentos-titulo"
          className="text-center text-3xl font-semibold tracking-tight"
        >
          Quem conhece, confia
        </h2>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.author}
              className="rounded-2xl border border-foreground/10 p-6"
            >
              <figure>
                <blockquote className="text-lg">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted">
                  {testimonial.author}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
