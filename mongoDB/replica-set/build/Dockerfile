FROM mongo:4.1
RUN mkdir /data/logs
RUN mkdir /data/entrypoint/
RUN mkdir /data/key/
COPY ./timezone/localtime /etc/localtime
COPY ./key/mongo-keys /data/key/mongo-keys
RUN chown -R mongodb:mongodb /data/
RUN apt-get -y update && apt-get -y install net-tools iputils-ping