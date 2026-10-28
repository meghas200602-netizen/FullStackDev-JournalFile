'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Attendances', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            studentId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Students',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },

            courseId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Courses',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },

            date: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },

            status: {
                type: Sequelize.ENUM(
                    'Present',
                    'Absent'
                ),
                allowNull: false
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
        await queryInterface.dropTable('Attendances');
    }
};