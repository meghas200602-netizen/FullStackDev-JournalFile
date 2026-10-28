const express = require('express');
const router = express.Router();

const { Attendance, Student, Course } = require('../models');

// Get all attendance records
router.get('/', async (req, res) => {
    try {
        const attendance = await Attendance.findAll({
            include: [
                {
                    model: Student,
                    as: 'student'
                },
                {
                    model: Course,
                    as: 'course'
                }
            ]
        });

        res.json(attendance);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// Get attendance by ID
router.get('/:id', async (req, res) => {
    try {
        const attendance = await Attendance.findByPk(
            req.params.id,
            {
                include: [
                    {
                        model: Student,
                        as: 'student'
                    },
                    {
                        model: Course,
                        as: 'course'
                    }
                ]
            }
        );

        if (!attendance) {
            return res.status(404).json({
                message: 'Attendance record not found'
            });
        }

        res.json(attendance);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

// Create attendance
router.post('/', async (req, res) => {
    try {
        const attendance = await Attendance.create(req.body);

        res.status(201).json(attendance);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

// Update attendance
router.put('/:id', async (req, res) => {
    try {
        const attendance = await Attendance.findByPk(
            req.params.id
        );

        if (!attendance) {
            return res.status(404).json({
                message: 'Attendance record not found'
            });
        }

        await attendance.update(req.body);

        res.json(attendance);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

// Delete attendance
router.delete('/:id', async (req, res) => {
    try {
        const attendance = await Attendance.findByPk(
            req.params.id
        );

        if (!attendance) {
            return res.status(404).json({
                message: 'Attendance record not found'
            });
        }

        await attendance.destroy();

        res.json({
            message: 'Attendance deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});

module.exports = router;