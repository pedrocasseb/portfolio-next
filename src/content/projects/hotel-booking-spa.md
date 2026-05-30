---
id: 6
title: "Hotel Booking SPA"
category: "Frontend / Web"
period: "ABR 2026 - MAI 2026"
description: "Interface web SPA interativa para busca e reserva de quartos de hotel. Conta com Clerk Auth para autenticação de clientes, Tailwind CSS v4 e React Router v7."
tags: ["React", "React Router", "Clerk Auth", "Tailwind CSS"]
github: "https://github.com/pedrocasseb"
featured: false
slug: "hotel-booking-spa"
---

## 📌 Descrição
Interface web interativa (Frontend SPA) para um sistema completo de busca e reserva de quartos de hotel (Booking). A aplicação oferece fluxos elegantes para busca de quartos, visualização detalhada de acomodações, agendamento de estadias e gestão de reservas efetuadas pelo usuário.

## ⚙️ Tecnologias Principais
- **Framework**: React (19.2.0)
- **Empacotador/Bundler**: Vite (7.2.4)
- **Roteamento SPA**: **React Router DOM v7** (7.11.0)
- **Autenticação**: **Clerk Auth** (`@clerk/clerk-react` 5.59.2) (gestão de login, perfil e segurança de rotas)
- **Estilização**: Tailwind CSS (v4.1.18) (layouts modernos, fluidos e responsivos)
- **Assets**: SVGs dinâmicos modularizados em arquivo de recursos (`assets.js`).

---

## 🏗️ Rotas SPA e Páginas (React Router)

O projeto é estruturado como uma aplicação Single Page Application (SPA) clássica, centralizando suas rotas dinâmicas no arquivo `src/App.jsx`:

### 🖥️ Páginas Frontend (`src/pages/`)
* **`/`** (`pages/Home.jsx`) → Landing page principal do hotel. Apresenta destaques, banner interativo com formulário de busca de estadias rápidas e ofertas exclusivas (`ExclusiveOffers.jsx`).
* **`/rooms`** (`pages/AllRooms.jsx`) → Exibição em grid de todos os quartos disponíveis com filtros de classificação (categoria, preço, amenidades).
* **`/rooms/:id`** (`pages/RoomDetails.jsx`) → Página detalhada de acomodação específica. Mostra fotos, avaliações, descrição, lista de amenidades inclusas (Wi-Fi, piscina, café da manhã) e painel interativo de check-in para reserva.
* **`/my-bookings`** (`pages/MyBookings.jsx`) → Painel restrito do cliente autenticado (via Clerk). Permite visualizar reservas ativas, históricas e status de pagamento.
* **`/about`** (`pages/About.jsx`) → Informações institucionais sobre o hotel, história e diferenciais.
* **`/experience`** (`pages/Experience.jsx`) → Seção dedicada a atrações locais, depoimentos e atividades externas oferecidas aos hóspedes.

---

## 🧩 Componentes Modulares (`src/components/`)
A interface utiliza componentes altamente desacoplados e reutilizáveis:
- `Navbar.jsx` → Barra de navegação responsiva com controle de perfil Clerk (detecta rotas de proprietários `/owner` para alterar o menu).
- `Hero.jsx` → Banner interativo inicial com pesquisa de datas de entrada e saída.
- `HotelCard.jsx` → Grid card de listagem com fotos, tags e preços de quartos.
- `ExclusiveOffers.jsx` / `FeaturedDestination.jsx` → Carrosséis e seções promocionais de hotéis recomendados.
- `Title.jsx` / `StarRating.jsx` → Elementos gráficos auxiliares.
- `NewsLetter.jsx` → Formulário de inscrição para novidades do hotel.
- `Footer.jsx` → Rodapé corporativo com links úteis.

---

## 🚀 Como Rodar o Projeto

Acesse a pasta `client/` e instale as dependências:

```bash
# Entrar na pasta do frontend
cd client

# Instalar dependências
npm install

# Iniciar o servidor local de desenvolvimento
npm run dev
```

*O frontend estará disponível localmente em `http://localhost:5173`. Certifique-se de configurar a chave pública do Clerk no arquivo `.env` para o correto funcionamento dos logins.*
