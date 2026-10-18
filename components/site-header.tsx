const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight">
          <span aria-hidden="true">🐾</span> Patinhas{" "}
          <span className="text-brand">Petshop</span>
        </a>
        <nav aria-label="Principal" className="hidden gap-8 text-sm sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="rounded-full bg-brand px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
