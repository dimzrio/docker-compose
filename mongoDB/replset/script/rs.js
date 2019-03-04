//db = (new Mongo('192.168.7.101:27017')).getDB('test')
rs.initiate()
rs.add("192.168.7.102:27017")
rs.add("192.168.7.103:27017")