'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Students', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },

            rollNo: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable('Students');
    }
};