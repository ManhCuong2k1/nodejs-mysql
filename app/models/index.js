const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.students = require("./StudentModel.js")(sequelize, Sequelize);
db.class = require("./ClassModel.js")(sequelize, Sequelize);
db.teachers = require("./TeacherModel.js")(sequelize, Sequelize);
db.teacher_class = require("./Teacher_Class.js")(sequelize, Sequelize);

db.class.hasMany(db.students, { constraints: false }); 
db.students.belongsTo(db.class, { constraints: false });

db.teachers.belongsToMany( db.class, { through: 'teacher_class', constraints: false } );
db.class.belongsToMany( db.teachers, { through: 'teacher_class', constraints: false } );

module.exports = db;
