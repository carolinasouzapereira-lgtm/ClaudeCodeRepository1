# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Estado atual

Scaffold recém-criado com `create-next-app` (Next.js 16.4, React 19.3, TypeScript 5, Tailwind CSS 4). Só existem `app/layout.tsx`, `app/page.tsx` e `app/globals.css`. Tudo marcado como **(planejado)** abaixo é convenção acordada, mas ainda não está instalado nem criado — instalar/criar quando for usar pela primeira vez.

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
- React Hook Form + Zod para validação **(planejado)**

## Architecture

- Sem `src/` — tudo na raiz. Alias de import `@/*` aponta para a raiz (`@/components/...`, `@/lib/...`)
- App Router: rotas em `app/`, agrupadas por `(grupo)/`
- Server Components por padrão — só adicionar `'use client'` quando usar hooks/eventos/browser APIs
- Mutações via Server Actions em `actions/` **(planejado)** — NUNCA chamar DB direto em Client Components
- `components/ui/` — primitivos reutilizáveis (shadcn) **(planejado)**
- `components/` — componentes de feature **(planejado)**
- `lib/` — helpers, clients (supabase, stripe), configurações **(planejado)**
- `types/` — tipos globais e schemas Zod compartilhados **(planejado)**

### Configuração do Next que muda o comportamento padrão

`next.config.ts` liga `cacheComponents: true` e `partialPrefetching: true`. Com Cache Components, acesso a dados não cacheado fora de um `<Suspense>` (ou sem `'use cache'`) quebra o build, e as opções de segmento antigas (`dynamic`, `revalidate`, `fetchCache`) não se aplicam. Antes de escrever data fetching ou caching, ler os guias em `node_modules/next/dist/docs/` (ex.: `01-app/03-api-reference/01-directives/use-cache.md`).

### Tailwind 4

- Não existe `tailwind.config.ts` nem `postcss.config`. O Tailwind é carregado pelo loader `@tailwindcss/turbopack` declarado em `next.config.ts` — não remover essa regra
- Design tokens ficam no bloco `@theme` de `app/globals.css`. Novos tokens entram lá antes de serem usados
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

## Workflow

- Branch naming: `feat/`, `fix/`, `chore/` + descrição em kebab-case
- Commits em inglês, imperativo: "add OAuth callback handler"

## Common Gotchas

- No Next 16 o `middleware.ts` está depreciado: usar `proxy.ts` na raiz (não dentro de `app/`), exportando uma função `proxy`
- `revalidatePath()` e `revalidateTag()` só funcionam em Server Actions/Route Handlers
- Supabase **(planejado)**: no server usar `createServerClient` (cookies); no client, `createBrowserClient`
- Imagens externas precisam de domínio autorizado em `next.config.ts` (`images.remotePatterns`)
