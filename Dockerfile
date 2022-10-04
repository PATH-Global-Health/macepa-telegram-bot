FROM node:16.17-alpine
RUN apk add --no-cache  chromium --repository=http://dl-cdn.alpinelinux.org/alpine/v3.10/main
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
USER node
CMD ["npm", "start"]