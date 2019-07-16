# Use an official Node runtime as a parent image
FROM node:12.6.0

# Set the working directory to /
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /user/src/app
COPY . .

# Install dependencies
RUN yarn

# Expose port for external use
EXPOSE 4000

# Run server
CMD ["yarn", "watch"]