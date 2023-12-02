# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Define the command to run your application
CMD ["node", "app.js"]