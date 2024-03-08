# Use an official Python image as a parent image
FROM python:3.8-slim

# Create a non-privileged user
RUN useradd -ms /bin/sh -u 1001 app

# Set the working directory to /backend
WORKDIR /backend

# Copy only requirements first to leverage caching
COPY requirements.txt /backend/requirements.txt
RUN pip install --no-cache-dir -r /backend/requirements.txt

# Copy the current directory contents into the container at /backend
COPY . /backend

# Ensure that files are owned by the configured user
RUN chown -R app:app /backend

# Switch to the non-privileged user
USER app

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run server.py when the container launches
CMD ["python", "server.py"]
