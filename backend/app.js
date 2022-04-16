const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const student_router = require("./routes/studentRoute");

// connect mongoDB
require("./db/db");

app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));
app.use(cors());

app.use("/api/student", student_router)

app.listen(8080, () => {
    console.log("server start with port 8080")
})