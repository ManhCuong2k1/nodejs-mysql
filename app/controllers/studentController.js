const db = require("../models/index.js");
const Students = db.students;
const Teachers = db.teachers;
const Class = db.class;
const Op = db.Sequelize.Op;

exports.getAll = async (req, res) => {
  try {
    const student = await Students.findAll({
      include: Class,
    });
    res.send(student);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
};

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const student = req.body;
  Students.create(student)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    const student = await Students.findOne({
      where: {
        ID: id
      }
    })
    if(update.name === null)  throw Error ("name invalid");

    student.name = update.name;

    student.save();
    const studentJSON = student.toJSON();
    res.send(studentJSON);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;

    const student = await Students.findOne({
      where: {
        ID: id
      }
    })
    // await student.save();
    await student.destroy();
    res.send(student);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
};

exports.restore = async (req, res) => {
  try {
    const id = req.params.id;

    const student = await Students.findOne({
      paranoid:false,
      where: {
        ID: id
      }
    })

    await student.restore();
    // await student.save();
    res.send(student);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
};

exports.findStudents = async (req, res) => {
  try {
    const idClass = req.params.id;
    const students = await Students.findAll({
      attributes: ['name'],
      include : [
        {
          model: Class,
          // attributes: ['name'],
        }
      ],
      where: {
        classID: idClass
      }
    
    })
    res.send(students);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
} 

