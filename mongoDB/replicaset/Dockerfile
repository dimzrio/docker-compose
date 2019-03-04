FROM mongo:4.1
COPY ./timezone/localtime /etc/localtime
COPY ./keyfile/mongo-keyfile /data/mongo-keyfile
#COPY ./hosts/hosts /etc/hosts
#COPY ./script/create_user.js /docker-entrypoint-initdb.d/create_user.js
RUN mkdir /data/logs
RUN chown mongodb:mongodb /data/logs
RUN chown mongodb:mongodb /data/mongo-keyfile
#RUN chown mongodb:mongodb /docker-entrypoint-initdb.d/create_user.js
