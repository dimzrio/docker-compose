FROM mongo:4.1
RUN mkdir /data/logs
RUN mkdir /data/entrypoint/
RUN mkdir /data/key/
RUN chown -R mongodb:mongodb /data/logs
RUN chown -R mongodb:mongodb /data/entrypoint/
RUN chown -R mongodb:mongodb /data/key/
COPY ./timezone/localtime /etc/localtime
COPY ./
RUN apt-get -y update && apt-get -y install net-tools iputils-ping