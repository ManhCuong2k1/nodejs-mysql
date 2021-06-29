const teachers = require('./TeacherModel.js');
const classes = require('./ClassModel.js');

module.exports = (sequelize, Sequelize) => {
    const TeacherClass = sequelize.define("teacher_class", {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // teacherID: {
        //     type: Sequelize.INTEGER,
        //     references: {
        //         model: teachers,
        //         key: 'id'
        //     }
        // },
        // classID: {
        //     type: Sequelize.INTEGER,
        //     references: {
        //         model: classes,
        //         key: 'id'
        //     }
        // }
    },
    {
        updatedAt: "updatedAt",
        createdAt: "createdAt",
        deletedAt: "deletedAt",
        paranoid: true
    });
    return TeacherClass;
};    