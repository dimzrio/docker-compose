// Get db
db = db.getSiblingDB("admin")

// // Create user
db.createUser(
    {
      user: "dimzrio",
      pwd: "dimzrio123",
      roles: [
         { role: "dbOwner", db: "admin" }
      ]
    }
);
