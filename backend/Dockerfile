# Use Node.js image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Ensure required packages are installed
RUN npm install cors body-parser

# Copy the rest of the application
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Make entrypoint script executable
RUN chmod +x docker-entrypoint.sh

# Expose backend port
EXPOSE 8000

# Run entrypoint script
CMD ["sh", "./docker-entrypoint.sh"]
