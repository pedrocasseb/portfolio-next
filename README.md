# 🌌 Pedro Casseb - Portfolio Pessoal & Profissional

Um website de portfólio moderno, minimalista e altamente interativo construído com as tecnologias web mais recentes. O design é focado em uma estética premium de alto contraste (monocromático) com bordas pontilhadas, efeitos de desfoque de fundo (glassmorphism) e animações fluidas baseadas no scroll do usuário.

---

## 🚀 Tecnologias Utilizadas

### Core & Frameworks
* **Next.js 16** (com Turbopack para compilação instantânea)
* **React 19** (estruturando componentes modernos e funcionais)
* **TypeScript** (garantindo tipagem estática segura)

### Estilização & UI
* **Tailwind CSS v4** (utilizando o novo compilador rápido e variáveis CSS nativas)
* **Radix UI & Shadcn/ui** (componentes acessíveis e customizáveis)
* **Lucide React** (biblioteca de ícones vetoriais modernos)

### Animações & Transições
* **GSAP & ScrollTrigger** (efeitos de fade-in, subida e stagger sincronizados com a rolagem do usuário)
* **Framer Motion** (transições de abas interativas no menu de navegação)
* **tw-animate-css** (micro-animações utilitárias)

### Processamento de Conteúdo (Headless CMS)
* **gray-matter** (parser de frontmatter para metadados de posts e projetos)
* **marked** (conversor de markdown para HTML para páginas dinâmicas)

---

## 🎨 Características do Design System

1. **Aparência Premium**: Visual limpo, minimalista e de alta legibilidade estruturado em uma fonte Geist.
2. **Layout Editorial**: Layouts assimétricos e simétricos com ritmos visuais alternados para as seções da página inicial.
3. **Scroll-Driven Animation**: Animações acionadas apenas quando o conteúdo entra no viewport (`start: "top 85%"`), com gerenciamento estrito de memória para evitar leaks de navegação Next.js (SPA).
4. **Resiliência de Layout**: Suporte total a `scrollbar-gutter: stable` no HTML para impedir deslocamentos involuntários na centralização da tela ao alternar entre páginas curtas e longas.
5. **Responsividade Total**: Layout fluido que se adapta cirurgicamente de telas de celulares compactos até monitores ultra-wide.

---

## 🏗️ Estrutura de Diretórios

```
PORTFOLIO/
├── public/                 # Assets públicos, imagens e logotipos
├── src/
│   ├── app/                # Roteador de App (Rotas, Layouts Globais, Metadados SEO)
│   │   ├── (main)/         # Páginas do portfólio (/sobre, /projetos, /blog, /contatos)
│   │   ├── globals.css     # Definições de cores OKLCH, variáveis e estilos base
│   │   └── icon.png        # Favicon dinâmico do projeto
│   ├── components/         # Componentes React
│   │   ├── ui/             # Componentes base Shadcn (Tooltip, Button, Card, etc.)
│   │   ├── Hero.tsx        # Seção de boas-vindas com estatísticas interativas
│   │   ├── HomeAbout.tsx   # Seção de transição para a trajetória do profissional
│   │   ├── HomeProjects.tsx# Seção de transição para o catálogo de projetos
│   │   ├── HomeContact.tsx # Seção de transição para contato rápido
│   │   ├── Navbar.tsx      # Menu de navegação fixo com controle de rota ativa
│   │   └── Footer.tsx      # Rodapé corporativo com créditos e links úteis
│   ├── config/             # Configurações de navegação do site
│   ├── content/            # Banco de dados baseado em Markdown (.md)
│   │   ├── blog/           # Artigos do blog com frontmatter
│   │   └── projects/       # Projetos reais com documentação e tags
│   └── lib/                # Arquivos utilitários e carregadores dinâmicos
│       ├── blog.ts         # Carregador de posts com tratamento gray-matter
│       └── projects.ts     # Carregador de projetos dinâmicos
├── package.json            # Scripts de build e dependências
└── tsconfig.json           # Configurações do TypeScript
```

---

## 🔄 Fluxo de Alimentação por Markdown

Para cadastrar um novo projeto ou artigo no blog, basta adicionar um arquivo `.md` nas pastas `src/content/projects/` ou `src/content/blog/` respectivamente.

### Exemplo de Frontmatter de Projeto:
```markdown
---
id: 1
title: "Título do Seu Projeto"
category: "Backend / APIs" # Opções: "Frontend / Web", "Mobile", "Automação & IoT", "Backend / APIs"
period: "ABR 2026 - MAI 2026"
description: "Descrição simplificada que aparecerá no card do grid principal."
tags: ["Java", "Spring Boot", "Docker"]
github: "https://github.com/pedrocasseb/seu-repositorio"
featured: true # Define se aparece na primeira página/destaques
slug: "titulo-do-seu-projeto"
---

## 📌 Descrição Completa do Projeto
Insira aqui o corpo textual do seu projeto usando tags tradicionais do Markdown...
```

---

## ⚙️ Instalação e Execução Local

### Pré-requisitos
* **Node.js** (versão 18 ou superior)
* **pnpm** (recomendado), **npm** ou **yarn**

### 1. Clonar o Repositório
```bash
git clone https://github.com/pedrocasseb/portfolio-next.git
cd portfolio-next
```

### 2. Instalar Dependências
```bash
pnpm install
# ou
npm install
```

### 3. Rodar o Servidor de Desenvolvimento
```bash
pnpm dev
# ou
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado ao vivo.

### 4. Compilar para Produção (Build)
Para testar a geração estática das páginas (SSG) e checar se há erros no TypeScript:
```bash
pnpm build
# ou
npm run build
```
