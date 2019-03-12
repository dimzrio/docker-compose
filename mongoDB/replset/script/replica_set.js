rs.initiate()
rs.add(IP_MONGO_02+":27017")
rs.add(IP_MONGO_03+":27017")

// config = {
//     "_id" : REPLICASET_NAME,
//     "members" : [
//         {
//             "_id" : 0,
//             "host" : IP_MONGO_01+":27017",
//             "priority" : 1
//         },
//         {
//             "_id" : 1,
//             "host" : IP_MONGO_02+":27017",
//             "priority" : 2
//         },
//         {
//             "_id" : 2,
//             "host" : IP_MONGO_03+":27017",
//             "priority" : 2
//         }
//     ]
// }
// rs.reconfig(config)