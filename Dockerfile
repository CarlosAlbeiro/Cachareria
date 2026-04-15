# Etapa 1: Construcción (Build)
FROM ovhcom/bun:1.0 AS build
WORKDIR /app

# Copiamos archivos de dependencias
COPY package.json bun.lockb ./

# Instalamos dependencias
RUN bun install

# Copiamos el resto del código y generamos el build
COPY . .
RUN bun run build

# Etapa 2: Servidor de Producción (Nginx)
FROM nginx:alpine
# Copiamos los archivos generados por Vite (carpeta dist) a Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponemos el puerto 8081
EXPOSE 8081

CMD ["nginx", "-g", "daemon off;"]