module.exports = (sequelize, Sequelize) => {
    const Students = sequelize.define("student", {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        }
    },
    {
        updatedAt: "updatedAt",
        createdAt: "createdAt",
        deletedAt: "deletedAt",
        paranoid: true
    });
    return Students;
};    