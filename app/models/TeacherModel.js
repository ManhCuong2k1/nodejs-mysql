module.exports = (sequelize, Sequelize) => {
    const Teachers = sequelize.define("teachers", {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        }
    });
    return Teachers;
};    