const details = [
  { label: "Endereço", value: "Rua das Flores, 123 — Centro, São Paulo/SP" },
  { label: "Horário", value: "Segunda a sábado, das 8h às 19h" },
  { label: "Telefone", value: "(11) 99999-0000" },
];

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="scroll-mt-20 bg-surface py-20"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2
          id="contato-titulo"
          className="text-3xl font-semibold tracking-tight"
        >
          Venha nos visitar
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Agende um horário pelo WhatsApp ou passe na loja. Seu pet é sempre
          bem-vindo!
        </p>
        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          {details.map((detail) => (
            <div key={detail.label}>
              <dt className="text-sm font-semibold text-brand">
                {detail.label}
              </dt>
              <dd className="mt-1">{detail.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="https://wa.me/5511999990000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-7 py-3 font-medium text-white transition-colors hover:bg-brand-dark"
          >
            Agendar pelo WhatsApp
          </a>
          <a
            href="tel:+5511999990000"
            className="rounded-full border border-foreground/20 px-7 py-3 font-medium transition-colors hover:bg-foreground/5"
          >
            Ligar agora
          </a>
        </div>
      </div>
    </section>
  );
}
