const express = require('express');

const studentRoutes = require('./routes/student');
const courseRoutes = require('./routes/course');
const attendanceRoutes = require('./routes/attendance');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({
        message: 'Lab 11 API is running'
    });
});

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);
app.use('/attendance', attendanceRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});