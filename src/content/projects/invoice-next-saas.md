---
id: 7
title: "Invoice Next - SaaS Financeiro"
category: "Frontend / Web"
period: "ABR 2026 - MAI 2026"
description: "Plataforma SaaS para faturamento empresarial. Gera PDFs de invoices no client/server, dispara cobranças via Nodemailer/Mailtrap e fornece gráficos interativos."
tags: ["Next.js", "Prisma ORM", "NextAuth.js", "PostgreSQL", "SaaS"]
github: "https://github.com/pedrocasseb/Paperless-Invoice-Platform"
featured: true
slug: "invoice-next-saas"
---

## 📌 Descrição

Plataforma SaaS moderna para gestão financeira de faturamento e emissão de faturas (Invoices). O sistema permite o cadastro de faturas e receitas, gera arquivos PDF dinamicamente, envia cobranças por e-mail e fornece um dashboard analítico completo com estatísticas e gráficos interativos de receitas.

## ⚙️ Tecnologias Principais

- **Framework**: Next.js (16.2.4) & React (19.2.4)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS (v4), Radix UI, Shadcn, Next Themes (Dark/Light)
- **Banco de Dados & ORM**: PostgreSQL, Prisma ORM (7.8.0), PostgreSQL Prisma Adapter
- **Autenticação**: **NextAuth.js v5** (beta.31 com suporte a Prisma Adapter e Magic Links)
- **Geração de Relatórios**: **jsPDF** (geração dinâmica de PDFs no lado do cliente e servidor)
- **Serviço de E-mail**: Nodemailer & Mailtrap (envio de faturas anexadas por e-mail)
- **Validação de Formulários**: Conform (`@conform-to/react`) & Zod
- **Gráficos**: Recharts
- **Animações**: Framer Motion

---

## 🏗️ Estrutura de Rotas e Páginas (Next.js App Router)

Abaixo está o mapeamento detalhado das telas e endpoints API do projeto localizados dentro do diretório `app/`:

### 🖥️ Páginas Frontend (Telas do Usuário)

- **`/`** (`app/page.tsx`) → Landing page institucional da plataforma SaaS.
- **`/login`** (`app/login/page.tsx`) → Tela de login/autenticação integrada ao NextAuth.
- **`/verify`** (`app/verify/page.tsx`) → Página de processamento de autenticação sem senha (Magic Link / E-mail de verificação).
- **`/onboarding`** (`app/onboarding/page.tsx`) → Fluxo inicial de cadastro de perfil de empresa/usuário.
- **`/dashboard`** (`app/dashboard/layout.tsx` & `page.tsx`) → Layout base e painel inicial com métricas consolidadas de faturamento.
- **`/dashboard/invoices`** (`app/dashboard/invoices/page.tsx`) → Tela com a listagem de faturas geradas e filtros de status.
- **`/dashboard/invoices/create`** (`app/dashboard/invoices/create/page.tsx`) → Formulário validado com Conform + Zod para emissão de faturas.
- **`/dashboard/invoices/[invoiceId]`** (`app/dashboard/invoices/[invoiceId]/page.tsx`) → Visualização detalhada de uma fatura, permitindo download e disparos manuais.
- **`/dashboard/incomes`** (`app/dashboard/incomes/page.tsx`) → Listagem de faturas pagas e outras fontes de renda (receitas).
- **`/dashboard/incomes/create`** (`app/dashboard/incomes/create/page.tsx`) → Formulário de inserção de novas receitas.
- **`/dashboard/incomes/[incomeId]`** (`app/dashboard/incomes/[incomeId]/page.tsx`) → Detalhes de receita específica.
- **`/dashboard/analytics`** (`app/dashboard/analytics/page.tsx`) → Gráficos analíticos de desempenho financeiro construídos com a biblioteca Recharts.
- **`/dashboard/user`** (`app/dashboard/user/page.tsx`) → Configurações de perfil e dados de faturamento do usuário logado.

---

### ⚙️ Endpoints de API (`app/api/`)

- **`POST/GET /api/auth/[...next]`** → Configuração e callbacks do NextAuth.js para controle de sessão segura.
- **`POST /api/email/[invoiceId]`** → Dispara o envio da fatura específica por e-mail ao cliente final via Nodemailer/Mailtrap, anexando o PDF gerado.
- **`GET/DELETE/PUT /api/invoice/[invoiceId]`** → Endpoint REST para operações diretas nas faturas.

---

## 🚀 Como Rodar o Projeto

### 1. Banco de Dados e Variáveis

Configure suas variáveis no arquivo `.env` (exemplo em `.env.example`), incluindo `DATABASE_URL`, `NEXTAUTH_SECRET`, e as credenciais de SMTP do `MAILTRAP`.

### 2. Rodar Migrações do Banco

Com o PostgreSQL ativo, sincronize o esquema do Prisma:

```bash
npx prisma generate
npx prisma migrate dev
```

### 3. Rodar o Servidor Local

Instale as dependências e inicie o desenvolvimento:

```bash
npm install
npm run dev
```

_Acesse a aplicação em `http://localhost:3000`._
