#FROM python:3.9-slim-buster
#
## Set environment variables
#ENV PYTHONUNBUFFERED 1
#
## Set working directory
#WORKDIR /code
#
## Copy requirements.txt to the container
#COPY requirements.txt /code/
#
## Install dependencies
#RUN apk add --no-cache gcc musl-dev jpeg-dev zlib-dev libffi-dev openssl-dev cargo && \
#    pip install --no-cache-dir -r requirements.txt && \
#    apk del gcc musl-dev jpeg-dev zlib-dev libffi-dev openssl-dev cargo
#
## Copy the rest of the application code to the container
#COPY .. /code/
#
## Expose port 8000 for the Django application
#EXPOSE 8000
#
## Run Django development server
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

#
## Use an official Node.js runtime as a parent image
#FROM node:14.17-alpine AS frontend-build
#
## Set the working directory to /frontend
#WORKDIR ../frontend
#
## Copy the package.json and package-lock.json files to the working directory
#COPY frontend/package*.json ./
#
## Install dependencies
#RUN npm ci --quiet
#
## Copy the rest of the frontend code to the working directory
#COPY ./frontend ./
#
## Build the frontend
#RUN npm run build
#
## Use an official Python runtime as a parent image
#FROM python:3.9-slim-buster AS backend-build
#
## Set the working directory to /backend
#WORKDIR /backend
#
## Copy the requirements file to the working directory
#COPY requirements.txt ./
#
## Install dependencies
#RUN pip install --no-cache-dir -r requirements.txt
#
## Copy the rest of the backend code to the working directory
#COPY backend/ ./
#
## Set environment variables
#ENV PYTHONUNBUFFERED 1
#ENV DEBUG 0
#
## Copy the frontend build from the frontend-build stage to the backend-build stage
#COPY --from=frontend-build /frontend/build/ /backend/frontend/
#
## Set the working directory to /backend/frontend
#WORKDIR /backend/
#
## Collect static files
#RUN python manage.py collectstatic --no-input
#
## Expose port 8000
#EXPOSE 8000
#
## Run the backend server
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
##CMD ["python", "--bind", "0.0.0.0:8000", "backend.wsgi"]
#






# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the requirements file into the container and install the dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the web application code into the container
COPY . .

# Expose port 8000 to the host
EXPOSE 8000

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV DJANGO_SETTINGS_MODULE=myapp.settings

# Run database migrations
RUN python manage.py migrate

# Start the server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
#

#docker build -t web .
#docker run -p 8000:8000 web
#access at http://localhost:8000.
