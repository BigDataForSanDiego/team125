FROM python:alpine3.16

WORKDIR /usr/src/backend

COPY . . 

RUN pip install django==4.1.2

EXPOSE 8000

CMD ["./manage.py", "runserver", "0.0.0.0:8000"]