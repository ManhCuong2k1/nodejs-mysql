module.exports = (sequelize, Sequelize) => {
    const Class = sequelize.define("class", {
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
    return Class;
};    