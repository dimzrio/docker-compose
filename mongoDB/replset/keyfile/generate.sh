#!/bin/bash
openssl rand -base64 756 > mongo-keyfile
chmod 0400 mongo-keyfile