module.exports = app => {
    const teachers = require("../controllers/teacherController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", teachers.create);
  
    app.use('/api/teacher', router);
  };    