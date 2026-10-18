# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Estado atual

Next.js 16.4, React 19.3, TypeScript 5, Tailwind CSS 4. O app é a landing page de uma pet shop fictícia ("Patinhas Petshop"), em pt-BR: uma única rota (`app/page.tsx`) que só monta, em ordem, as seções de `components/` (`SiteHeader`, `Hero`, `Services`, `About`, `Testimonials`, `Contact`, `SiteFooter`). Todas são Server Components estáticos, sem dados externos — o conteúdo fica em arrays dentro de cada componente. Tudo marcado como **(planejado)** abaixo é convenção acordada, mas ainda não está instalado nem criado — instalar/criar quando for usar pela primeira vez.

Navegação por âncoras: o header e os CTAs apontam para `#servicos`, `#sobre` e `#contato`. Cada seção-alvo tem esse `id` + `scroll-mt-20` (compensa o header `sticky`) e um `aria-labelledby` apontando para o `id` do seu `<h2>`. O scroll suave vem de `scroll-smooth` + `data-scroll-behavior="smooth"` no `<html>` em `app/layout.tsx`. Ao criar/renomear uma seção, manter link, `id` e `scroll-mt` em sincronia.

## Commands

- `npm run dev` — servidor local (porta 3000, Turbopack)
- `npm run build` — build de produção
- `npm run lint` — ESLint (flat config em `eslint.config.mjs`)
- `npm run type-check` — `next typegen && tsc --noEmit`. O `typegen` é obrigatório: tipos globais como `LayoutProps<"/">` e `PageProps` são gerados em `.next/types`, e o `tsc` sozinho falha sem eles
- ALWAYS rodar `npm run type-check; npm run lint` após uma série de mudanças
- Testes: nenhum runner configurado ainda. Quando houver, rodar um arquivo por vez (`npm run test -- NomeDoArquivo`), não o suite completo

Ambiente (Windows / PowerShell 5.1):
- `&&` não existe no PowerShell 5.1 — encadear com `;`
- Se `node`/`npm` não forem reconhecidos, o Node está em `C:\Program Files\nodejs` mas fora do PATH da sessão: `$env:Path = "C:\Program Files\nodejs;$env:Path"`
- Git está instalado e a pasta é um repositório (branch `main`), ainda sem remote configurado
- A pasta do projeto se chama "Projeto 1" (com espaço), nome inválido para npm — o `name` no `package.json` é `projeto-1`; CLIs que derivam o nome do diretório (ex.: `create-next-app .`) falham aqui

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS 4
- shadcn/ui **(planejado)**
- React Hook Form + Zod para validação **(planejado)**. Zod 4: usar `z.email()` (não `z.string().email()`) e `z.flattenError(err)` (não `err.flatten()`) — as formas antigas estão depreciadas

## Architecture

- Sem `src/` — tudo na raiz. Alias de import `@/*` aponta para a raiz (`@/components/...`, `@/lib/...`)
- App Router: rotas em `app/`, agrupadas por `(grupo)/`
- Server Components por padrão — só adicionar `'use client'` quando usar hooks/eventos/browser APIs
- Mutações via Server Actions em `actions/` **(planejado)** — NUNCA chamar DB direto em Client Components
- `components/ui/` — primitivos reutilizáveis (shadcn) **(planejado)**
- `components/` — seções da landing page, uma por arquivo, com export nomeado (`export function Hero`)
- `lib/` — helpers, clients (supabase, stripe), configurações **(planejado)**
- `types/` — tipos globais e schemas Zod compartilhados **(planejado)**

### Configuração do Next que muda o comportamento padrão

`next.config.ts` liga `cacheComponents: true` e `partialPrefetching: true`. Com Cache Components, acesso a dados não cacheado fora de um `<Suspense>` (ou sem `'use cache'`) quebra o build, e as opções de segmento antigas (`dynamic`, `revalidate`, `fetchCache`) não se aplicam. Antes de escrever data fetching ou caching, ler os guias em `node_modules/next/dist/docs/` (ex.: `01-app/03-api-reference/01-directives/use-cache.md`).

### Tailwind 4

- Não existe `tailwind.config.ts` nem `postcss.config`. O Tailwind é carregado pelo loader `@tailwindcss/turbopack` declarado em `next.config.ts` — não remover essa regra
- Design tokens ficam no bloco `@theme inline` de `app/globals.css` (o `inline` é necessário porque os tokens referenciam variáveis de `:root`). Novos tokens entram lá antes de serem usados
- Paleta atual: `background`, `foreground`, `surface` e `muted` são variáveis em `:root` com override em `prefers-color-scheme: dark`; `brand` (rosa), `brand-dark` (hover) e `accent` (verde-água) são fixos no `@theme`. Usar essas classes (`bg-surface`, `text-brand`, `text-muted`…) em vez de cores cruas do Tailwind
- As fontes Geist são expostas como variáveis CSS em `app/layout.tsx` e mapeadas para `--font-sans` / `--font-mono` no `@theme`

## Code Style

- NEVER use `any` explícito — usar `unknown` + type guard
- Imports: ES modules (import/export), sem require()
- Tailwind only — sem CSS inline, sem styled-components
- Nomes de arquivo: kebab-case. Componentes: PascalCase

## Environment Variables

- `NEXT_PUBLIC_*` apenas para valores seguros no client
- Segredos (DB, API keys) apenas em Server Actions ou Route Handlers
- `.env*` está no `.gitignore`. Ainda não existe `.env.example` — criar junto com a primeira variável e manter atualizado

## Skills do projeto

`.claude/skills/` tem `frontend-design`, `vercel-react-best-practices` e `web-design-guidelines` (versões travadas em `skills-lock.json`). As duas da Vercel são symlinks para `.agents/skills/` — editar lá, não no link. Consultar `vercel-react-best-practices` ao mexer em performance de React/Next e `web-design-guidelines` ao revisar UI.

## Workflow

- Branch naming: `feat/`, `fix/`, `chore/` + descrição em kebab-case
- Commits em inglês, imperativo: "add OAuth callback handler"

## Common Gotchas

- No Next 16 o `middleware.ts` está depreciado: usar `proxy.ts` na raiz (não dentro de `app/`), exportando uma função `proxy`
- `revalidatePath()` e `revalidateTag()` só funcionam em Server Actions/Route Handlers
- Supabase **(planejado)**: no server usar `createServerClient` (cookies); no client, `createBrowserClient`
- Imagens externas precisam de domínio autorizado em `next.config.ts` (`images.remotePatterns`)
