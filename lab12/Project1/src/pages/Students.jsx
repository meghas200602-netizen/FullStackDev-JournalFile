function Students() {
  return (
    <div style={{ textAlign: "center", padding: "30px" }}>

      <h1>Students</h1>

      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800"
        alt="Students"
        style={{
          width: "500px",
          maxWidth: "90%",
          borderRadius: "15px"
        }}
      />

      <h2>Student Information</h2>

      <p>
        This page contains information about students of the college.
      </p>

      <p>
        Students can view their name, class, division, roll number,
        and academic year.
      </p>

    </div>
  )
}

export default Students