module.exports = app => { 
    require("./class.js")(app) ;
    require("./students.js")(app) ;
    require("./teacher.js")(app) ;
    require("./teacher_class.js")(app) ;
};