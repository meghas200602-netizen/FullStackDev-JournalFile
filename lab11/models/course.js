'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Course extends Model {
        static associate(models) {
            Course.hasMany(models.Attendance, {
                foreignKey: 'courseId',
                as: 'attendances'
            });
        }
    }

    Course.init(
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

            code: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        },
        {
            sequelize,
            modelName: 'Course',
            tableName: 'Courses'
        }
    );

    return Course;
};