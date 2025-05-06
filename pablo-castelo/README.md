# Movies App 🎬

Este projeto é uma aplicação com **frontend em Next.js** e **backend em NestJS**, conectados a um banco de dados PostgreSQL via Docker.

## Requisitos

- [Node.js](https://nodejs.org) (versão 22.15.0+)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/pablohcs7/movies-app-cubos.git
cd movies-app-cubos
```

### 2. Suba o banco de dados com Docker

```bash
cd movies-app-api
docker-compose up -d
```

### 3. Instale as dependências

#### Backend

```bash
cd movies-app-api
yarn
```

#### Frontend

```bash
cd ../movies-app-web
yarn
```

---

## 🚀 Execução

### Backend

```bash
cd movies-app-api
yarn prisma migrate dev
yarn start:dev
```

### Frontend

Em outro terminal:

```bash
cd movies-app-web
yarn dev
```

---

## 🗂 Estrutura

```
movies-app/
├── movies-app-api/       → API NestJS + Prisma + PostgreSQL (Docker)
├── movies-app-web/      → App Next.js com Chakra UI
└── README.md      → Este arquivo
```

---

## 🛠 Funcionalidades

- Autenticação com JWT
- CRUD de filmes
- Validações com DTOs
- Estilização com Chakra UI
- Integração com API
