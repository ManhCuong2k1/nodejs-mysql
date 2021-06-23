const db = require("../models");
const Teachers = db.teachers;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.name) {
  //   res.status(400).send({
  //     message: "Content can not be empty."
  //   });
  //   return;
  // }

  // Create a Tutorial
  const teacher = req.body;

  // Save Tutorial in the database
  Teachers.create(teacher)
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

