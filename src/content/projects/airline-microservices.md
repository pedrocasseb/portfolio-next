---
id: 2
title: "Airline Microservices - Ecossistema GDS"
category: "Backend / APIs"
period: "ABR 2026 - MAI 2026"
description: "Sistema distribuído de Companhia Aérea GDS (Global Distribution System) desenvolvido em microserviços com Java 21, Spring Boot 4 e componentes em nuvem do Spring Cloud."
tags: ["Java", "Spring Boot", "Spring Cloud", "Microservices", "Docker"]
github: "https://github.com/pedrocasseb"
featured: true
slug: "airline-microservices"
---

## 📌 Descrição
Sistema GDS (Global Distribution System) de Companhia Aérea distribuído em uma arquitetura corporativa moderna de microserviços. Desenvolvido em **Java 21** e **Spring Boot 4**, o ecossistema utiliza **Spring Cloud** para descoberta, roteamento, gateway centralizado de APIs e segurança integrada de ponta a ponta.

## ⚙️ Tecnologias Principais
- **Linguagem**: Java (21)
- **Framework Base**: Spring Boot (4.0.5)
- **Ecossistema de Nuvem**: Spring Cloud (2025.1.0)
- **Componentes Cloud**:
  - **Eureka Discovery Server** (Registro e descoberta de instâncias)
  - **Spring Cloud Gateway** (Porta de entrada única e roteamento dinâmico)
  - **Spring Cloud Config Server** (Configurações centralizadas em repositório)

---

## 🏗️ Estrutura Multi-módulos Maven

O projeto está dividido em subprojetos modulares que garantem alto desacoplamento e escalabilidade horizontal:

### 1. 🗃️ Biblioteca Comum (`common-lib/`)
Dependência compartilhada compilada entre os microserviços. Contém:
- DTOs de tráfego comum (Ex: passageiros, rotas, aeroportos).
- Classes utilitárias e serializadores.
- Tratador centralizado de exceções para respostas REST padronizadas.

### 2. ☁️ Infraestrutura Cloud (`cloud/`)
Servidores utilitários que orquestram a rede interna de microserviços.
- **Eureka Server**: Servidor de Discovery onde cada instância de microserviço se registra ao subir, permitindo conexões por nomes lógicos (Ex: `flight-ops-service`).
- **API Gateway**: Filtro centralizado que gerencia segurança, limites de requisição e distribui o tráfego externo para os serviços específicos de domínio.

### 3. ⚙️ Serviços de Domínio (`services/`)
Microserviços que implementam as regras e lógica de negócio de cada módulo:

#### 🟢 Módulo Airline Core (`airline-core-service`)
Gerenciamento de companhias aéreas e frota.
- `AirlineController.java` → Cadastro e detalhamento de companhias parceiras.
- `AircraftController.java` → Cadastro e status de aeronaves físicas (modelos, capacidades).

#### 🔵 Módulo Flight Operations (`flight-ops-service`)
Escalonamento, criação e controle de voos operacionais.
- `FlightController.java` → Criação de rotas aéreas e voos fixados.
- `FlightInstanceController.java` → Controla as instâncias físicas de voo em datas específicas (Check-ins, atrasos, status ativo).

#### 🟡 Módulo Location & Aeroportos (`location-service`)
Controle geográfico de destinos e infraestrutura portuária.
- `CityController.java` → Cadastro de cidades atendidas pelo sistema.
- `AirportController.java` → Gerenciamento de aeroportos, pistas e terminais associados.

#### 🔴 Módulo User & Auth (`user-service`)
Controle cadastral de passageiros e segurança da tripulação/staff.
- `AuthController.java` → Emissão de tokens JWT e autenticação geral.
- `UserController.java` → CRUD de passageiros, funcionários e perfis administrativos.

---

## 🚀 Como Rodar o Ecossistema

### Pré-requisitos
- JDK 21 instalado localmente.
- Banco de dados relacional PostgreSQL ativo.

### Inicialização
Compilar todos os módulos de uma vez a partir da raiz:
```bash
mvn clean install
```

Para executar cada módulo individualmente (deve-se inicializar primeiro os servidores de infraestrutura da pasta `cloud` e em seguida os módulos de negócio de `services`):
```bash
# Eureka Server
cd cloud/eureka-server && mvn spring-boot:run

# API Gateway
cd cloud/gateway && mvn spring-boot:run

# Serviços de Domínio
cd services/airline-core-service && mvn spring-boot:run
```
