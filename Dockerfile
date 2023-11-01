FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM node:16-alpine AS runner
WORKDIR /app
COPY . .
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
