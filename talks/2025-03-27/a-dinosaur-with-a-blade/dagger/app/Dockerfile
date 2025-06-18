FROM oven/bun:latest

WORKDIR /src
COPY . .

RUN bun install
RUN bun run build:bun

EXPOSE 3000
CMD ["bun", "dist/index.js"]
