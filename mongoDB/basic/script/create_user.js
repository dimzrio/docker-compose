// Get db
db = db.getSiblingDB("admin")

// Create read & write user
db.createUser(
    {
      user: USER,
      pwd: USER_PASSWD,
      roles: [
         { role: "readWrite", db: "admin" }
      ]
    }
);