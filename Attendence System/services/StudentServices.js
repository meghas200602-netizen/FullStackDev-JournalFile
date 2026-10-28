const {Student} = require("../models")

const getAllStudents = async (req,res) => {
    try {
        const students = await Student.findAll();

       res.status(201).json(students)
    } catch (error) {
        throw error;
    }
};

const createStudent = async (req,res) => {
    try {
        const students = await Student.create(req.body);
        res.status(201).json(students)     
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllStudents,
    createStudent
};
