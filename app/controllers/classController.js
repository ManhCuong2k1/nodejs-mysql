const db = require("../models");
const Classes = db.class;
const Op = db.Sequelize.Op;
var router = require("express").Router();

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty."
    });
    return;
  }

  // Create a Tutorial
  const classs = {
    name: req.body.name
  };

  // Save Tutorial in the database
  Classes.create(classs)
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

