FROM golang:latest

ENV GIT_PROJECT github.com/dimzrio/grpc-example-server
RUN go get $GIT_PROJECT

WORKDIR $GOPATH/src/$GIT_PROJECT
ENV GO111MODULE on
RUN go get github.com/golang/protobuf@master
RUN go mod vendor
RUN go build -o /grpc-server

WORKDIR /
RUN rm -rf /go/src/*
ENTRYPOINT ["./grpc-server"]