# Patinhas Petshop 🐾

Landing page de uma pet shop fictícia, a **Patinhas Petshop**, feita em pt-BR como projeto de estudo com Next.js e Claude Code.

É uma página única, estática e responsiva, que apresenta os serviços da loja (banho e tosa, veterinário, hotel e creche, loja e rações), a história da marca, depoimentos de clientes e as formas de contato. Tem suporte a tema claro/escuro automático, conforme a preferência do sistema.

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router, Turbopack, Cache Components)
- [React 19](https://react.dev)
- [TypeScript 5](https://www.typescriptlang.org) em modo `strict`
- [Tailwind CSS 4](https://tailwindcss.com), carregado pelo loader `@tailwindcss/turbopack`
- Fonte [Geist](https://vercel.com/font) via `next/font`
- ESLint 9 (flat config) com `eslint-config-next`

## Estrutura

```
app/
  layout.tsx      # <html> com fontes, tema e scroll suave
  page.tsx        # monta as seções da landing page, em ordem
  globals.css     # design tokens do Tailwind (@theme inline)
components/
  site-header.tsx # cabeçalho fixo com navegação por âncoras
  hero.tsx
  services.tsx    # #servicos
  about.tsx       # #sobre
  testimonials.tsx
  contact.tsx     # #contato
  site-footer.tsx
```

Todas as seções são Server Components sem dados externos: o conteúdo fica em arrays dentro de cada componente. A navegação usa âncoras (`#servicos`, `#sobre`, `#contato`) com rolagem suave.

## Como rodar

Pré-requisito: Node.js 20.9 ou superior.

```bash
npm install
npm run dev
```

Depois, abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando              | O que faz                                        |
| -------------------- | ------------------------------------------------ |
| `npm run dev`        | Servidor de desenvolvimento (porta 3000)         |
| `npm run build`      | Build de produção                                |
| `npm run start`      | Sobe o build de produção                         |
| `npm run lint`       | Roda o ESLint                                    |
| `npm run type-check` | Gera os tipos do Next (`next typegen`) e roda o `tsc` |

## Próximos passos

- Componentes de UI com shadcn/ui
- Formulário de contato com React Hook Form + Zod, enviado por Server Action
