module.exports = app => {
    const students = require("../controllers/studentController.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", students.create);

    //find students by class
    router.get("/class/:id", students.findStudents);
  
    // edit student
    router.put("/:id", students.update);

     // edit student
     router.put("/:id", students.update);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Create a new Tutorial
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/students', router);
  };    