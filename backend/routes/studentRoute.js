const express = require("express");
const router = express.Router();
const studentController = require("./../controllers/studentController");

router.route("/")
    .get(studentController.get_all_student)
    .post(studentController.create_student)

router.route("/:email")
    .get(studentController.get_student)
    .delete(studentController.delete_student)
    .patch(studentController.edit_student)

module.exports = router