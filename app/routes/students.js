module.exports = app => {
    const students = require("../controllers/studentController.js");
  
    var router = require("express").Router();

    // get all 
    router.get("/", students.getAll);

    // get detail 
    router.get("/detail/:id", students.getStudentDetail);
  
    // Create a new Tutorial
    router.post("/", students.create);

    //find students by class
    router.get("/class/:id", students.findStudents);
  
    // edit student
    router.put("/:id", students.update);

    // delete student
    router.delete("/:id", students.delete);

     // delete student
    router.post("/restore/:id", students.restore);
  
    app.use('/api/students', router);
  };    