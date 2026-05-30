---
id: 4
title: "E-Commerce REST API"
category: "Backend / APIs"
period: "ABR 2026 - MAI 2026"
description: "API RESTful corporativa completa para gestão de E-commerce, abrangendo catálogo de produtos, carrinhos de compras ativos, faturamentos e checkout de pedidos."
tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "REST API"]
github: "https://github.com/pedrocasseb"
featured: false
slug: "ecom-application-api"
---

## 📌 Descrição
API RESTful corporativa para gestão de uma plataforma de E-commerce. O sistema gerencia de forma transacional e segura o catálogo de produtos, controle de carrinhos de compras de usuários, geração de pedidos e gerenciamento de perfis, integrado a uma base de dados relacional PostgreSQL executada via Docker.

## ⚙️ Tecnologias Principais
- **Linguagem**: Java (21)
- **Framework**: Spring Boot (4.0.6)
- **Persistência**: Spring Data JPA & Hibernate
- **Banco de Dados**: PostgreSQL (Produção/Desenvolvimento) & H2 (Ambiente de Testes)
- **Monitoramento**: Spring Boot Actuator
- **Infraestrutura**: Docker (PostgreSQL 17)
- **Produtividade**: Lombok

---

## 🏗️ Estrutura da API e Endpoints

O projeto está estruturado com controladores Spring Web MVC mapeando as operações clássicas de compras:

### 📦 Controle de Produtos (`ProductController.java`)
Gerenciamento do catálogo de itens da loja.
- `GET /api/products` → Retorna a listagem de produtos com paginação e filtros de categoria.
- `GET /api/products/{id}` → Retorna os detalhes de um produto específico.
- `POST /api/products` → Cadastra um novo produto (restrito a administradores).
- `PUT /api/products/{id}` → Atualiza informações do produto.
- `DELETE /api/products/{id}` → Remove o produto do catálogo.

### 🛒 Controle de Carrinho (`CartController.java`)
Manipulação do carrinho de compras ativo do usuário autenticado.
- `GET /api/cart` → Obtém os itens do carrinho do usuário ativo.
- `POST /api/cart/items` → Adiciona um produto ao carrinho.
- `PUT /api/cart/items/{itemId}` → Altera a quantidade de um item no carrinho.
- `DELETE /api/cart/items/{itemId}` → Remove um item específico do carrinho.
- `DELETE /api/cart/clear` → Limpa todo o carrinho de compras de uma vez.

### 💳 Controle de Pedidos (`OrderController.java`)
Geração e processamento de compras/pedidos.
- `POST /api/orders` → Fecha o carrinho ativo do usuário e gera um pedido com status de pagamento (Checkout).
- `GET /api/orders` → Histórico de pedidos efetuados pelo usuário logado.
- `GET /api/orders/{id}` → Detalhes específicos de um pedido (status de entrega, faturamento).

### 👥 Controle de Usuários (`UserController.java`)
Administração de cadastros de clientes.
- `POST /api/users/register` → Cadastro de novos clientes na plataforma.
- `GET /api/users/profile` → Retorna dados cadastrais do perfil logado.

---

## 📦 Serviços de Infraestrutura (Docker)

O projeto conta com um arquivo `docker-compose.yml` pré-configurado para inicializar o banco relacional PostgreSQL 17 de forma rápida e isolada:
- **Nome do Container**: `postgres-ecom`
- **Banco de Dados**: `ecomdb`
- **Porta Exposta**: `5432`

---

## 🚀 Como Rodar o Projeto

### 1. Subir o Banco de Dados PostgreSQL
Na raiz do diretório `java/ecom-application`, execute:
```bash
docker compose up -d
```

### 2. Executar a Aplicação Spring Boot
Suba a aplicação utilizando o Maven wrapper:
```bash
./mvnw spring-boot:run
```

*A API REST estará ativa localmente em `http://localhost:8080` com o console de consultas H2 em memória ativo no path `/h2-console` durante testes locais.*
