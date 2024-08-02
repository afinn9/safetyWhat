# FROM python:3

# WORKDIR /app

# COPY requirements.txt .

# RUN pip install --no-cache-dir -r requirements.txt

# COPY . .


# ENV PYTHONUNBUFFERED=1


# CMD ["gunicorn", "--bind", "0.0.0.0:8000", "project1.wsgi:application"]











FROM python:3

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .


ENV PYTHONUNBUFFERED=1

RUN python manage.py collectstatic --noinput


CMD ["gunicorn", "--bind", "0.0.0.0:8000", "project1.wsgi:application"]





