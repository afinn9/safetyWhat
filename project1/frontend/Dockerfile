# Use the official Node.js image as the base image
FROM node:20.11.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3000 (the default port for a React development server)
EXPOSE 3000

# Start the React application
CMD ["npm", "start"]
