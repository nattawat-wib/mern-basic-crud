const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mern-basic-crud")
.then(() => console.log("connect successfully"))
.catch(error => console.log(`DB connection ERROR: ${error}`));

module.exports = mongoose