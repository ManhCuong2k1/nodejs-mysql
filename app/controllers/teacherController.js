const db = require("../models/index.js");
const Teachers = db.teachers;
const Op = db.Sequelize.Op;

//get all
exports.getAll = async (req, res) => {
  try {
    const teacher = await Teachers.findAll();
    res.send(teacher);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
};

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const teacher = req.body;
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

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    const teacher = await Teachers.findOne({
      where: {
        ID: id
      }
    })
    if(update.name === null)  throw Error ("name invalid");

    teacher.name = update.name;

    teacher.save();
    const teacherJSON = teacher.toJSON();
    res.send(teacherJSON);
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

    const teacher = await Teachers.findOne({
      where: {
        ID: id
      }
    })
    // await teacher.save();
    await teacher.destroy();
    res.send(teacher);
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

    const teacher = await Teachers.findOne({
      paranoid:false,
      where: {
        ID: id
      }
    })

    await teacher.restore();
    // await teacher.save();
    res.send(teacher);
  } catch (error) {
    res.status(500).send({
      message:
      error.message || "Some error occurred while creating the Tutorial."
    });
  }
};
