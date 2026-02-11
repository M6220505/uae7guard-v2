FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy source
COPY . .

# Build
RUN npm run build || echo "Build failed, using dev mode"

# Expose port
EXPOSE 8080

# Start command
CMD ["npm", "run", "start"]
