module.exports = app => {
    const teacherClass = require("../controllers/teacherClassController.js");
  
    var router = require("express").Router();
  
    // Create a new teacher_class
    router.post("/", teacherClass.create);

    //find teachers by class
    router.get('/class/:id', teacherClass.findTeachers);

    //find classes by teacher
    router.get('/teacher/:id', teacherClass.findClass);
  
    app.use('/api/teacher_class', router);
  };