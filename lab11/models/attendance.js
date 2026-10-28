'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Attendance extends Model {
        static associate(models) {
            Attendance.belongsTo(models.Student, {
                foreignKey: 'studentId',
                as: 'student'
            });

            Attendance.belongsTo(models.Course, {
                foreignKey: 'courseId',
                as: 'course'
            });
        }
    }

    Attendance.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            studentId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            courseId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            date: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },

            status: {
                type: DataTypes.ENUM('Present', 'Absent'),
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: 'Attendance',
            tableName: 'Attendances'
        }
    );

    return Attendance;
};