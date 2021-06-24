module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
    },
    {
        updatedAt: "updatedAt",
        createdAt: "createdAt",
        deletedAt: "deletedAt",
        paranoid: true
    }
);
    return Tutorial;
};    