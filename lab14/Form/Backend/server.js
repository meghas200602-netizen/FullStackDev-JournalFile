
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const uploadDir = path.join(__dirname, "uploads");
const dataFile = path.join(__dirname, "students.json");

fs.mkdirSync(uploadDir, { recursive: true });

if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, "[]");
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const safeName = path
      .basename(file.originalname)
      .replace(/[^a-zA-Z0-9._-]/g, "_");

    cb(null, Date.now() + "-" + safeName);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
    files: 10,
  },
});

app.post("/api/students", upload.array("labFiles", 10), (req, res) => {
  try {
    const students = JSON.parse(
      fs.readFileSync(dataFile, "utf8")
    );

    const student = {
      id: Date.now(),
      rollno: req.body.rollno,
      class: req.body.class,
      email: req.body.email,
      name: req.body.name,
      batch: req.body.batch,
      files: (req.files || []).map((file) => ({
        originalName: file.originalname,
        savedName: file.filename,
      })),
    };

    students.push(student);

    fs.writeFileSync(
      dataFile,
      JSON.stringify(students, null, 2)
    );

    res.status(201).json({
      message: "Saved successfully",
      student,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Could not save data" });
  }
});

app.get("/api/students", (req, res) => {
  const students = JSON.parse(
    fs.readFileSync(dataFile, "utf8")
  );
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});