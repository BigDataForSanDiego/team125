FROM python:alpine3.16

WORKDIR /usr/src/backend

COPY . . 

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "./manage.py", "runserver", "0.0.0.0:8000"]