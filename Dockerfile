# Stage 1: Build the app using Node
FROM node:18 AS builder

WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm install

# Copy rest of the project and build
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
