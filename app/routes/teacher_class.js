module.exports = app => {
    const teacherClass = require("../controllers/teacherClassController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", teacherClass.create);
  
    app.use('/api/teacher_class', router);
  };    