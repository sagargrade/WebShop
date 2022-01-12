const express = require("express");

const authRoutes = require("./routes/auth.routes");
const db = require("./data/database");

const app = express();

app.use(authRoutes);

// db.connectToDatabase()
//   .then(function () {
//     app.listen(3000); // We want to start server only when we are successfully able to connect to database
//   })
//   .catch(function (error) {
//     console.log("Failed to connect to database!");
//     console.log(error);
//   });

app.listen(3000); // This to be removed when working with database as it will be called when db connection is successful
