# Stage 1: Build the Django app
FROM python:3

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Set environment variables
ENV PYTHONUNBUFFERED=1

# Run database migrations (optional, if not handled manually)
# RUN python manage.py migrate

# Start the Gunicorn server
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "project1.wsgi:application"]
