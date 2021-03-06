module.exports = app => {
    const classs = require("../controllers/classController.js");
  
    var router = require("express").Router();

    // Get all class
    router.get("/", classs.getAll);
  
    //get class id
    router.get("/detail/:id", classs.getClassDetail);

    // Create a new Class
    router.post("/", classs.create);
  
    // Update Class
    router.put("/:id", classs.update);

    // Delete Class
    router.delete("/:id", classs.delete);

    // Restore Class
    router.post("/restore/:id", classs.restore);

    // Search Class
    router.get("/search", classs.search);
  
    app.use('/api/class', router);
  };    