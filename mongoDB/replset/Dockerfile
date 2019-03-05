FROM mongo:4.1
COPY ./timezone/localtime /etc/localtime
COPY ./keyfile/mongo-keyfile /data/mongo-keyfile
COPY ./script/init.sh /docker-entrypoint-initdb.d/init.sh
RUN mkdir /data/logs
RUN chown mongodb:mongodb /data/logs
RUN chown mongodb:mongodb /data/mongo-keyfile
RUN chown mongodb:mongodb /docker-entrypoint-initdb.d/init.sh