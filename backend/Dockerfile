# Use official Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) before installing dependencies
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application (routes, controllers, Prisma, etc.)
COPY . .

# Ensure Prisma Client is generated
RUN if [ -d "prisma" ]; then npx prisma generate; fi

# Expose backend port
EXPOSE 6000

# Start the server
CMD ["npm", "run", "start"]
