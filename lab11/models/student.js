'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Student extends Model {
        static associate(models) {
            Student.hasMany(models.Attendance, {
                foreignKey: 'studentId',
                as: 'attendances'
            });
        }
    }

    Student.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },

            rollNo: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        {
            sequelize,
            modelName: 'Student',
            tableName: 'Students'
        }
    );

    return Student;
};