// Get db
db = db.getSiblingDB($ACCESS_DB)

// // Create user
db.createUser(
    {
      user: $CREATE_USER,
      pwd: $CREATE_PASSWD,
      roles: [
         { role: "root", db: $ACCESS_DB }
      ]
    }
);
