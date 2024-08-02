# FROM node:20.11.1

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application files
# COPY . .

# # Expose port 3000 (the default port for a React development server)
# EXPOSE 3000

# # Start the React application
# CMD ["npm", "start"]








# # Stage 1: Build the React application
# FROM node:20.11.1 AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application files
# COPY . .

# # Build the React application
# RUN npm run build

# # Stage 2: Serve the application with Nginx
# FROM nginx:latest

# # Copy the build output to Nginx's html directory
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
















# Stage 1: Build the React application
FROM node:20.11.1 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:latest

# Copy the build output to Nginx's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]




