# Stage 1: build the Vite app into static files.
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first so Docker can cache dependency installs.
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: serve the static build with Nginx.
FROM nginx:1.27-alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
