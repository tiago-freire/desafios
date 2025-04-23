# **Web App - Cubos Movies**

Este projeto é um aplicativo web desenvolvido em **Next.js**, que utiliza a API do **TMDB** para exibir informações detalhadas sobre filmes, incluindo sinopse, gêneros, trailer e estatísticas adicionais.

## **Requisitos**

Antes de compilar e executar o aplicativo, certifique-se de que você tenha os seguintes pré-requisitos instalados em sua máquina:

- **Node.js** (versão 18.18 ou superior)
- **npm** ou **yarn**
- Chave de acesso à API do TMDB (disponível em [The Movie Database API](https://www.themoviedb.org/documentation/api))

## **Configuração do Projeto**

1. Clone este repositório para sua máquina local:

   ```bash
   git clone https://github.com/usuario/cubos-movies.git
   cd cubos-movies
   ```

2. Instale as dependências do projeto:

   - Usando **npm**:
     ```bash
     npm install
     ```
   - Ou usando **yarn**:
     ```bash
     yarn install
     ```

3. Crie um arquivo `.env.local` na raiz do projeto com suas variáveis de ambiente:

   ```plaintext
   TMDB_API_KEY=SUACHAVEAQUI
   ```

   > Substitua `SUACHAVEAQUI` pela sua chave de API do TMDB.

## **Scripts Disponíveis**

Os seguintes comandos podem ser usados para compilar, executar e testar o aplicativo:

- **Rodar localmente em modo de desenvolvimento**:

  ```bash
  npm run dev
  ```

  ou

  ```bash
  yarn dev
  ```

  O servidor será iniciado em `http://localhost:3000`.

- **Build para produção**:

  ```bash
  npm run build
  ```

  ou

  ```bash
  yarn build
  ```

  Após o build, você pode rodar a versão de produção com:

  ```bash
  npm start
  ```

  ou

  ```bash
  yarn start
  ```

- **Lint do código**:
  Execute para verificar problemas de estilo e formatação no código:
  ```bash
  npm run lint
  ```
  ou
  ```bash
  yarn lint
  ```

## **Estrutura do Projeto**

A estrutura geral do projeto é a seguinte:

```plaintext
.
├── components/          # Componentes reutilizáveis
├── pages/               # Páginas e rotas do Next.js
├── public/              # Recursos estáticos (imagens, ícones, etc.)
├── services/            # Funções para consumo de APIs (ex.: fetchMovieDetails)
├── styles/              # Arquivos de estilo (CSS, Tailwind)
├── .env.local           # Variáveis de ambiente (não incluído no repositório)
├── tailwind.config.js   # Configuração do TailwindCSS
├── package.json         # Dependências e scripts
└── README.md            # Instruções e documentação
```

## **Tecnologias Utilizadas**

- **Next.js**: Framework React para SSR e SSG.
- **TailwindCSS**: Framework de CSS para estilização.
- **TMDB API**: Para dados sobre filmes.
- **TypeScript**: Tipagem estática para JavaScript.
