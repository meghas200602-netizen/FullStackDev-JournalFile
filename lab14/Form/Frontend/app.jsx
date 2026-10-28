
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    rollno: "",
    class: "",
    email: "",
    name: "",
    batch: "",
  });

  const [files, setFiles] = useState([]);
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    files.forEach((file) => {
      data.append("labFiles", file);
    });

    try {
      const response = await fetch(
        "http://localhost:5000/api/students",
        {
          method: "POST",
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      const result = await response.json();

      setStudents((previous) => [
        ...previous,
        result.student,
      ]);

      alert("Student details and lab files saved!");

      setFormData({
        rollno: "",
        class: "",
        email: "",
        name: "",
        batch: "",
      });

      setFiles([]);
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Server error! Make sure your backend is running.");
    }
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1>Student Lab Portal</h1>
        <p>Enter your details and upload your lab work.</p>

        <form onSubmit={handleSubmit}>
          <label>Roll Number</label>
          <input
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
            required
          />

          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Class</label>
          <input
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Batch</label>
          <input
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            required
          />

          <label>Upload Lab Work / Files</label>
          <input
            type="file"
            multiple
            onChange={(e) =>
              setFiles(Array.from(e.target.files))
            }
          />

          {files.map((file, index) => (
            <p key={index}>📎 {file.name}</p>
          ))}

          <button type="submit">Save Details & Files</button>
        </form>
      </div>

      <div className="saved-card">
        <h2>Saved Records</h2>

        {students.map((student) => (
          <div className="student" key={student.id}>
            <h3>{student.name}</h3>
            <p>Roll No: {student.rollno}</p>
            <p>Class: {student.class}</p>
            <p>Email: {student.email}</p>
            <p>Batch: {student.batch}</p>
            <p>
              Files:{" "}
              {student.files.map((file) => file.originalName).join(", ") ||
                "No files"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;