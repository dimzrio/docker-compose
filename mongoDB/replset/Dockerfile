FROM mongo:4.1
COPY ./timezone/localtime /etc/localtime
RUN mkdir /data/logs
RUN chown mongodb:mongodb /data/logs