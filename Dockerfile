# Use official lightweight Python base image
FROM python:3.9-slim

# Set environment variables for Python performance & environment paths
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=/app/src
ENV PORT=8080

# Set container work directory
WORKDIR /app

# Copy requirement details and install dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy all repository source directories
COPY . /app/

# Expose port 8080 (standard Google Cloud Run target port)
EXPOSE 8080

# Run FastAPI app using uvicorn on container start
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080"]
