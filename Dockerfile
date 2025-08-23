FROM node:23-alpine AS builder

RUN mkdir -p /usr/src/next-nginx
WORKDIR /usr/src/next-nginx
COPY package*.json /usr/src/next-nginx/
RUN npm install
COPY . .
ARG NEXT_PUBLIC_UMAMI
ENV NEXT_PUBLIC_UMAMI=$NEXT_PUBLIC_UMAMI
RUN npx next build

FROM nginx:1.27.4-alpine AS production
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/next-nginx/out/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]