// Create db
db = db.getSiblingDB('admin')
// // Create user for replica set
//db.createUser(
//     {
//       user: "admin",
//       pwd: "admin123",
//       roles: [
//          { role: "userAdminAnyDatabase", db: "admin" }
//       ]
//     }
// );

// // Create user
db.createUser(
    {
      user: "dimzrio",
      pwd: "dimzrio123",
      roles: [
         { role: "root", db: "admin" }
      ]
    }
);
