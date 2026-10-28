import { useContext } from 'react'
import { ThemeContext } from '../Context/themeContext'

function StudentCard({ student }) {

  const { theme } = useContext(ThemeContext)

  return (
    <div className="student-details">

      <h2>{student.name}</h2>

      <p>
        <strong>Class:</strong> {student.className}
      </p>

      <p>
        <strong>Division:</strong> {student.division}
      </p>

      <p>
        <strong>Roll No:</strong> {student.rollNo}
      </p>

      <p>
        <strong>Year:</strong> {student.year}
      </p>

      <p>
        <strong>Theme:</strong> {theme === "light" ? "Light" : "Dark"}
      </p>

    </div>
  )
}

export default StudentCard