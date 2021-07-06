const db = require("../models");
const Classes = db.class;
const Op = db.Sequelize.Op;
var router = require("express").Router();

exports.getAll = async (req, res) => {
  try {
    const classes = await Classes.findAll({
      paranoid: false
    });
    res.send(classes);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
};

exports.getClassDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const classes = await Classes.findOne({
      where : {
        ID: id
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

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const classes = req.body;
  Classes.create(classes)
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

    const classes = await Classes.findOne({
      where: {
        ID: id
      }
    })
    if(update.name === null)  throw Error ("name invalid");

    classes.name = update.name;

    classes.save();
    const classJSON = classes.toJSON();
    res.send(classJSON);
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

    const classes = await Classes.findOne({
      where: {
        ID: id
      }
    })
    await classes.save();
    await classes.destroy();
    res.send(classes);
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

    const classes = await Classes.findOne({
      paranoid:false,
      where: {
        ID: id
      }
    })

    await classes.restore();
    await classes.save();
    res.send(classes);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
};

exports.search = async (req, res) => {
  try {
    const searchKey= req.query.searchKey ? req.query.searchKey.toString() : "";
    const classes = await Classes.findAll({
      where: {
        name: {
          [Op.like] : `%${searchKey}%`
        }
      }
    })
    // await classes.save();
    res.send(classes);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
};

