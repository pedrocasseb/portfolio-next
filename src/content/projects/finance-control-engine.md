---
id: 5
title: "Finance Control Auto-Engine"
category: "Backend / APIs"
period: "ABR 2026 - MAI 2026"
description: "Motor inteligente Node.js que conecta a caixas de e-mail via IMAPFlow, extrai anexos e links de faturas em PDF, analisa o conteúdo via regex e popula banco de dados PostgreSQL."
tags: ["Node.js", "IMAPFlow", "Prisma ORM", "PostgreSQL", "Cron Job"]
github: "https://github.com/pedrocasseb"
featured: true
slug: "finance-control-engine"
---

## 📌 Descrição
Mecanismo inteligente de automação financeira (Backend) que lê contas de e-mail não lidas do Gmail via protocolo **IMAP**, detecta faturas e boletos, realiza o download automático de anexos e links em formato PDF, processa o conteúdo textual desses arquivos e extrai campos estruturados de pagamento que são posteriormente salvos em **PostgreSQL**.

## ⚙️ Tecnologias Principais
- **Plataforma**: Node.js (>= 18)
- **Framework REST**: Express (4.21.2)
- **ORM & Banco**: Prisma ORM (5.22.0) & PostgreSQL
- **Conectividade IMAP**: `imapflow` (1.0.182) (conexão estável TLS/Gmail)
- **Processamento de E-mails**: `mailparser` (3.7.2)
- **Processador PDF**: `pdf-parse` (1.1.1) (extração de texto cru de arquivos PDF)
- **Agendador de Tarefas**: `node-cron` (3.0.3) (agendador periódico em segundo plano)
- **Logging**: `winston` (3.17.0)

---

## 🏗️ Estrutura de Pastas e Arquitetura

O projeto está dividido em módulos funcionais que separam as responsabilidades:

```
.
├── prisma/
│   └── schema.prisma         # Definição das tabelas Email e Invoice no PostgreSQL
├── src/
│   ├── app.js                # Inicialização de rotas e middlewares do Express
│   ├── index.js              # Ponto de entrada do sistema (Express e Cron)
│   ├── config/               # Utilitários de setup (env.js, logger.js, prisma.js)
│   ├── jobs/                 # Tarefas periódicas (Email Polling Cron)
│   ├── repositories/         # Operações diretas no banco Prisma (Email/Invoice Repositories)
│   ├── routes/               # Rotas REST da API
│   ├── services/             # Lógica de negócio orquestrada
│   │   ├── emailProcessorService.js  # Filtragem e leitura de anexos
│   │   ├── invoiceService.js         # Processamento de dados e vencimentos
│   │   └── pdfService.js             # Chamada ao extrator do pdf-parse
│   └── utils/                # Utilitários (extratores Regex de boletos)
```

---

## 🔄 Fluxo de Processamento Automático

O processador executa tarefas cronometradas em segundo plano seguindo o fluxo:

1. **Cron Job** acorda a cada 5 minutos.
2. **Conecta ao Gmail** com segurança através do protocolo IMAPFlow.
3. **Filtra e-mails** não lidos que contenham palavras-chave como `boleto`, `fatura` ou `pagamento`.
4. **Baixa os PDFs** localizados tanto em anexos físicos quanto extraídos de links do corpo de texto.
5. **Extrai o texto bruto** do PDF utilizando a biblioteca `pdf-parse`.
6. **Aplica Regex** avançadas para mapear de forma autônoma: *Valor total da fatura*, *Data de vencimento* e *Emissor do documento*.
7. **Persiste os dados** estruturados no banco PostgreSQL utilizando o Prisma ORM.
8. **Marca o e-mail** como lido (`SEEN`) e processado para evitar duplicidade.

---

## 🚀 Como Rodar o Projeto

1. Instale as dependências:
```bash
npm install
```

2. Crie e configure o arquivo `.env` com base no `.env.example`:
- `DATABASE_URL`: String de conexão com o banco PostgreSQL.
- `IMAP_USER` / `IMAP_PASS`: Credenciais de aplicativo seguras do Gmail.
- `POLLING_CRON`: Expressão Cron do agendador (`*/5 * * * *` para rodar a cada 5 minutos).

3. Gere o Prisma Client e rode as migrações de banco:
```bash
npm run prisma:generate
npm run prisma:migrate
```

4. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

*A API estará ativa expondo endpoints como `GET /api/invoices` para retornar a listagem das faturas extraídas do seu banco de dados.*
