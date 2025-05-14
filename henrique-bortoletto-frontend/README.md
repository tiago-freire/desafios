# 🎥 Cubos Movies – Frontend com React, Vite, Tailwind e React Query

Interface web do Cubos Movies, uma aplicação de catálogo de filmes com autenticação, cadastro, edição e listagem. O frontend consome a API desenvolvida com NestJS e oferece uma experiência moderna com suporte a dark mode e responsividade.

---

## ✨ Funcionalidades

- Cadastro e login de usuários com autenticação via JWT
- Proteção de rotas autenticadas
- Cadastro, listagem, edição e exclusão de filmes
- Campo de busca com debounce por título
- Dark mode (tema escuro/claro)
- Responsividade para diferentes tamanhos de tela

---

## 📦 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [React Router](https://reactrouter.com/)
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)

---

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório

```bash
git clone <seu-repositorio>
cd frontend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` com o seguinte conteúdo:

```env
VITE_API_URL=http://localhost:3001
VITE_KEY_APP=@cubos:app
VITE_KEY_TOKEN=@cubos:access_token
```

> 🔐 Essas chaves são usadas para configurar a URL da API e o armazenamento local dos tokens JWT.

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

---

## ⚠️ Observações

- O upload de imagens ainda **não foi implementado**. O campo aceita apenas URLs diretas.
- **Filtros customizáveis** na listagem de filmes ainda não estão disponíveis.
- Alguns pontos de melhoria no responsivo conforme figma

---

Projeto desenvolvido para fins de estudo/prática.
