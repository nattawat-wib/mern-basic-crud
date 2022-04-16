const { error_res, success_res, delete_success_res } = require("../utils");
const Student = require("./../models/studentModel");

exports.get_all_student = async (req, res) => {
    const all_student = await Student.find();

    success_res(res, 200, all_student)
}

exports.get_student = async (req, res) => {
    console.log("get_student");
    const student = await Student.find({ email: req.params.email });
    if(!student.length) error_res(res, 404, "student with this email is not exist");
    
    console.log(student);
    
    success_res(res, 200, student)
}

exports.create_student = async (req, res) => {
    const is_exist_email = await Student.find({ email: req.body.email });
    if(is_exist_email.length) return error_res(res, 400, "this email is already use !!!");
    // if(is_exist_email.length) return res.status(400).json({msg: "this email is already use !!!"});
    
    const new_student = await Student.create(req.body);

    success_res(res, 200, new_student)
}

exports.delete_student = async (req, res) => {
    // validate is exist user
    const exits_student = await Student.find({ email: req.params.email });
    if(!exits_student.length) return error_res(res, 404, "student with this email is not exist");    

    await Student.findOneAndDelete({ email: req.params.email });
    
    delete_success_res(res)
}

exports.edit_student = async (req, res) => {
    // // validate Email
    // const is_exist_email = await Student.find({ email: req.body.email });
    // if(is_exist_email.length) return error_res(res, 400, "this email is already use !!!");

    // validate is exist user
    const exits_student = await Student.find({ email: req.params.email });
    if(!exits_student.length) return error_res(res, 404, "student with this email is not exist");    

    const student = await Student.findOneAndUpdate({ email: req.params.email }, req.body, { new: true });
    success_res(res, 200, student)
}