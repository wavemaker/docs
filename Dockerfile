# Build Stage 
FROM node:22-alpine AS builder

WORKDIR /app

RUN apk add --no-cache git

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

# Runtime Stage
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
