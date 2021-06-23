module.exports = (sequelize, Sequelize) => {
    const TeacherClass = sequelize.define("teacher_class", {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
    });
    return TeacherClass;
};    