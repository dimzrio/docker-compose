require('dotenv').config();
var ip_mongo_2 = process.env.IP_MONGO_02
var ip_mongo_3 = process.env.IP_MONGO_03
rs.initiate()
rs.add(ip_mongo_2+":27017")
rs.add(ip_mongo_3+":27017")