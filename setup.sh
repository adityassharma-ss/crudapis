#!/bin/bash

# Build the Docker image for both API Server and Database
echo "Building Docker images..."
docker build -t assignment-api-server-image .

# Inform the user about the completion
echo "Docker images built successfully:"
echo "API Server Docker image: assignment-api-server-image"
