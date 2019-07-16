# Use an official Python runtime as a parent image
FROM node:12.6.0

ENV SERVER_PORT=4000
ENV DB_NAME=propbet
ENV ACCOUNTS_SECRET=secret
ENV MONGO_HOST=0.0.0.0

# Set the working directory to /
WORKDIR /

# Copy the current directory contents into the container at /app
COPY . /

# Install any needed packages specified in requirements.txt
RUN yarn

EXPOSE 4000

# Run app.py when the container launches
CMD ["yarn", "watch"]