#!/bin/bash

server_cn=localhost
passwd=Ex4mple

# Step 1 - Generate CA (ca.crt) + key (ca.key)
openssl genrsa -passout pass:${passwd} -des3 -out ca.key 4096
openssl req -passin pass:${passwd} -new -x509 -days 365 -key ca.key -out ca.crt -subj "/CN=${server_cn}"

# Step 2 - Generate Server Private key (server.key)
openssl genrsa -passout pass:${passwd} -des3 -out server.key 4096

# Step 3 - Generate a certificate signin request from CA (server.csr)
openssl req -passin pass:${passwd} -new -key server.key -out server.csr -subj "/CN=${server_cn}"

# Step 4 - Generate the certificate with ca we created (it's called self signing) - (server.crt)
openssl x509 -req -passin pass:${passwd} -days 365 -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt

# Step 5 - Convert the server certificate to *.pam (server.pam) - usable by gRPC
openssl pkcs8 -topk8 -nocrypt -passin pass:${passwd} -in server.key -out server.pam
