
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
        throw new Error("Failed to save");
      }

      alert("Student details and files saved successfully!");

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
      alert("Cannot connect to backend. Check your server.");
    }
  };

  return (
    <div className="container">
      <h1>Student Lab Work Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Roll Number</label>
        <input
          name="rollno"
          value={formData.rollno}
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

        <label>Name</label>
        <input
          name="name"
          value={formData.name}
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

        <label>Upload Lab Files</label>
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

        <button type="submit">Save Details</button>
      </form>
    </div>
  );
}

export default App;