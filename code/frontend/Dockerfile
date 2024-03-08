# Use an official Node runtime as a parent image
FROM node:16

# Create a non-privileged user
RUN useradd -ms /bin/sh -u 1001 app

# Set the working directory to /frontend
WORKDIR /frontend

# Copy only the package.json and package-lock.json files
COPY package*.json ./


# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Ensure that files are owned by the configured user
RUN chown -R app:app /frontend

# Switch to the non-privileged user
USER app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run npm start when the container launches
CMD ["sh", "-c",  "npm run start"]
