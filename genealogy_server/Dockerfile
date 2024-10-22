# Use the official Node.js 20 image as the base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm i

# Copy the rest of the application source code to the container
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the Nest.js application for production
RUN npm run build

# Expose the port your Nest.js application is listening on
EXPOSE 4000

# Run Prisma migrations and then start the application
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start:prod"]