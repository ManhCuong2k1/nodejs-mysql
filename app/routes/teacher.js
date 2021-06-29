module.exports = app => {
  const teachers = require("../controllers/teacherController.js");

  var router = require("express").Router();

  // get All
  router.get("/", teachers.getAll);

  // Create a new Teacher
  router.post("/", teachers.create);

  // Update Teacher
  router.put("/:id", teachers.update);

  // Delete Teacher
  router.delete("/:id", teachers.delete);

  // Restore Teacher
  router.post("/restore/:id", teachers.restore);

  app.use('/api/teacher', router);
};