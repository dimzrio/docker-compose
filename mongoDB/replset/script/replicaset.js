//db = (new Mongo('192.168.7.101:27017')).getDB('test')
config = {
    "_id" : "grpc",
    "members" : [
        {
            "_id" : 0,
            "host" : "192.168.7.101:27017"
        },
        {
            "_id" : 1,
            "host" : "192.168.7.102:27017"
        },
        {
            "_id" : 2,
            "host" : "192.168.7.103:27017"
        }
    ]
}
rs.initiate(config)