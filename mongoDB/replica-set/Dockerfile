FROM mongo:4.1
COPY ./timezone/localtime /etc/localtime
RUN mkdir /data/logs
RUN chown mongodb:mongodb /data/logs
RUN apt-get -y update && apt-get -y install net-tools iputils-ping