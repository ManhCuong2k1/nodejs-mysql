const db = require("../models");
const TeacherClass = db.teacher_class;
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

