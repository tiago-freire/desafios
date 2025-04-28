# Stage 1: Build
FROM node:18-alpine as builder

WORKDIR /src

# Copiar arquivos de dependências primeiro para aproveitar o cache
COPY cubos-movie-frontend/package*.json ./

# Instalar dependências
RUN npm ci

# Copiar o resto dos arquivos do projeto
COPY cubos-movie-frontend/ ./

# Build da aplicação
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copiar build da aplicação
COPY --from=builder /app/cubos-movie-frontend/dist /usr/share/nginx/html

# Copiar configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta 80
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"]