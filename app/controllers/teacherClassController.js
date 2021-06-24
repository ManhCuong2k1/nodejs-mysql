const db = require("../models");
const TeacherClass = db.teacher_class;
const Teacher = db.teachers;
const Class = db.class;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const teacher_class = req.body;

  // Save Tutorial in the database
  TeacherClass.create(teacher_class)
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

exports.findTeachers = async (req, res) => {
  try {
    const idClass = req.params.id;

    const teachers = await Teacher.findAll({
      // attributes: ['name', 'ID'],
      include: {
        model: Class,
        attributes: [],
        where: {
          ID: idClass
        }
      }
    });
    res.send(teachers);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
}

exports.findClass = async (req, res) => {
  try {
    const idTeacher = req.params.id;

    const classes = await Class.findAll({
      // attributes: ['name'],
      include: {
        model: Teacher,
        attributes: [],
        where: {
          ID: idTeacher
        }
      }
    });
    res.send(classes);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
}
