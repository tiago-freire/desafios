# 🎬 Cubos Movies API – Backend em NestJS com Prisma e Upload via AWS S3

API RESTful desenvolvida com NestJS, Prisma ORM e PostgreSQL para gerenciamento de usuários e filmes. Conta com autenticação via JWT e suporte ao upload de imagens para a AWS S3.

---

## ✨ Funcionalidades

- CRUD de **usuários** (`/users`)
- CRUD de **filmes** (`/movies`)
- **Autenticação** com JWT (`/auth/login`)
- **Upload de imagens** (`/upload`)
- Integração com **AWS S3**
- Banco de dados **PostgreSQL** via Prisma ORM

---

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone <seu-repositorio>
cd backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Preencha os campos do arquivo `.env` com base no exemplo abaixo:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/cubosmovies
PORT=3001
JWT_SECRET=sua_chave_secreta
AWS_ACCESS_KEY_ID=sua_chave_aws
AWS_SECRET_ACCESS_KEY=sua_chave_secreta_aws
AWS_REGION=us-east-1
AWS_BUCKET_NAME=nome-do-bucket
```

> ℹ️ O banco de dados está pré-configurado no `docker-compose.yml`, então você **não precisa alterar** a `DATABASE_URL`.

### 4. Suba o banco de dados com Docker

```bash
docker-compose up -d
```

### 5. Rode as migrations do Prisma

```bash
npx prisma migrate dev
```

### 6. Inicie o servidor de desenvolvimento

```bash
npm run start:dev
```

---

## 🛠 Scripts úteis

```bash
# Abrir o Prisma Studio
npx prisma studio

# Gerar os tipos do Prisma Client manualmente
npx prisma generate
```

---

## 🧪 Tecnologias utilizadas

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [AWS S3](https://aws.amazon.com/s3/)
- [JWT](https://jwt.io/)

---

## ⚠️ Observações

- As credenciais de banco e configurações básicas estão fixas no `docker-compose.yml`, pois este projeto foi desenvolvido como desafio prático.
- O projeto ainda não possui suporte a **filtros customizáveis** para busca de filmes (ex: por gênero, data, etc).

---

Projeto desenvolvido para fins de estudo/prática.
