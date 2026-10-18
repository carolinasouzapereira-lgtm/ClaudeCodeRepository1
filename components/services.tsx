const services = [
  {
    icon: "🛁",
    title: "Banho e tosa",
    description:
      "Produtos hipoalergênicos e profissionais treinados para deixar seu pet limpo e cheiroso.",
  },
  {
    icon: "🩺",
    title: "Veterinário",
    description:
      "Consultas, vacinas e exames com atendimento atencioso e sem pressa.",
  },
  {
    icon: "🏠",
    title: "Hotel e creche",
    description:
      "Espaço seguro e monitorado para o seu pet brincar enquanto você está fora.",
  },
  {
    icon: "🦴",
    title: "Loja e rações",
    description:
      "Rações, petiscos, brinquedos e acessórios das melhores marcas.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="scroll-mt-20 py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="servicos-titulo"
          className="text-center text-3xl font-semibold tracking-tight"
        >
          Nossos serviços
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          Tudo o que o seu companheiro precisa para viver bem.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-2xl border border-foreground/10 p-6"
            >
              <p className="text-4xl" aria-hidden="true">
                {service.icon}
              </p>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm text-muted">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
