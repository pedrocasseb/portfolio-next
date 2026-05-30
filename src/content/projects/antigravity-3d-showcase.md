---
id: 3
title: "Antigravity 3D Showcase"
category: "Frontend / Web"
period: "ABR 2026 - MAI 2026"
description: "Interface web tridimensional interativa de alta fidelidade baseada na landing page oficial da Antigravity, usando Three.js para renderização WebGL e GSAP para orquestração de animações."
tags: ["React", "Three.js", "GSAP", "Tailwind CSS v4"]
github: "https://github.com/pedrocasseb"
featured: true
slug: "antigravity-3d-showcase"
---

## 📌 Descrição
Interface interativa de altíssima performance visual, que serve como clone de demonstração (*showcase*) da landing page 3D da Antigravity. O projeto foca em gráficos interativos e animações fluidas para proporcionar uma experiência de navegação premium ao usuário.

## ⚙️ Tecnologias Principais
- **Framework**: React (19.2.6)
- **Empacotador/Bundler**: Vite (8.0.12)
- **Estilização**: Tailwind CSS (v4.3.0), Lucide React
- **Biblioteca 3D**: **Three.js** (0.184.0) (renderização WebGL de partículas e objetos 3D)
- **Biblioteca de Animações**: **GSAP** (3.15.0) (orquestração avançada de Timelines e gatilhos por ScrollTrigger)

---

## 🏗️ Estrutura do Projeto
```
ANTIGRAVITY-CLONE/
├── public/                  # Modelos 3D (.gltf/.glb), texturas e assets estáticos
├── src/
│   ├── components/          # Elementos da interface e painéis dinâmicos
│   ├── assets/              # Vetores e imagens
│   ├── App.tsx              # Componente principal (Canvas Three.js + overlay HTML)
│   ├── main.tsx             # Ponto de entrada do React SPA
│   └── index.css            # Tema global e declarações de variáveis CSS v4
├── package.json             # Scripts e dependências declaradas
└── vite.config.js           # Plugins de build do Vite
```

---

## 🎨 Lógica e Elementos Visuais
* **Cena 3D responsiva (Three.js)**: Renderiza uma malha interativa tridimensional de alta densidade de partículas, reagindo dinamicamente às coordenadas tridimensionais do cursor do mouse.
* **Scroll-driven Animations (GSAP)**: Linhas de tempo complexas que sincronizam o deslocamento da câmera do Three.js e transições de opacidade dos textos exatamente com o progresso de rolagem do usuário.
* **Tailwind v4**: Utilização estrita do novo motor de build nativo CSS do Tailwind v4 para velocidade instantânea e variáveis nativas rápidas.

---

## 🚀 Como Rodar o Projeto

Acesse a pasta do projeto e instale as dependências:

```bash
# Instalar as dependências via pnpm
pnpm install

# Iniciar o servidor de desenvolvimento local
pnpm dev
```

*O site estará disponível para visualização local em `http://localhost:5173`.*
