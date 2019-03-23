#!/bin/bash

server_cn=localhost
passwd=M0ng0DB

openssl genrsa -out ca.key 2048
openssl req -x509 -new -nodes -key ca.key -sha256 -days 1024 -out ca.pem

openssl genrsa -out mongodb.key 2048
openssl req -new -key mongodb.key -out mongodb.csr -subj "/CN=localhost"
openssl x509 -req -in mongodb.csr -CA ca.pem -CAkey ca.key -CAcreateserial -out mongodb.crt -days 500 -sha256

cat mongodb.key mongodb.crt > mongodb.pem