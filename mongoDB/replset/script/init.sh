#!/usr/bin/env bash

mongo admin -u admin -p admin123 --authenticationDatabase admin --eval "db.createUser({user: 'app_user', pwd: 'app_pass', roles:[{role:'dbOwner', db: 'admin'}]});"
mongo admin -u admin -p admin123 --authenticationDatabase admin --eval "rs.initiate({_id:'grpc', members:[{_id:0,host:'127.0.0.1:27017'}]});"