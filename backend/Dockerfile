# Use the official Node.js image as base
FROM node:21.7.2

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["node", "index.js"]
