FROM mongo:4.1
COPY ./timezone/localtime /etc/localtime
COPY ./keyfile/mongo-keyfile /data/mongo-keyfile
RUN mkdir /data/logs
RUN chown mongodb:mongodb /data/logs
RUN chown mongodb:mongodb /data/mongo-keyfile
