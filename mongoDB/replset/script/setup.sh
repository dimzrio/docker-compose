mongo -u $ROOT_USER -p $ROOT_PASSWD --host $IP_MONGO_01 < /script/create_user.js
mongo -u $ROOT_USER -p $ROOT_PASSWD --host $IP_MONGO_01 < /script/replica_set.js
