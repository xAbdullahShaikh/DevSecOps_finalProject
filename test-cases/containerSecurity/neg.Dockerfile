FROM node:18
WORKDIR /app
COPY . .
CMD ["node", "index.js"]
# runs as root by default, not read-only
