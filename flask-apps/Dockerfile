FROM python:3

COPY ["apps.py", "requirements.txt", "./"]

RUN pip install -r requirements.txt

EXPOSE 8080

CMD [ "python", "apps.py" ]
