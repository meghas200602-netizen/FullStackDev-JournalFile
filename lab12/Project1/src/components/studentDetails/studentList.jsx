import { useState, useContext } from 'react'
import StudentCard from './Studentcard'
import { ThemeContext } from '../Context/themeContext'

function StudentList({ students }) {

  // Get theme from context
  const { theme, setTheme } = useContext(ThemeContext)

  // First button count
  const [count, setCount] = useState(0)

  // Second button internal count
  const [secondCount, setSecondCount] = useState(0)

  function renderStudentList() {

    const studentList = []

    for (let i = 0; i < students.length; i++) {

      studentList.push(
        <StudentCard
          key={students[i].rollNo}
          student={students[i]}
        />
      )

    }

    return studentList
  }

  // First button
  function handleCount() {
    setCount(count + 1)

    // Reset second button count
    setSecondCount(0)
  }

  // Second button
  function handleSecondCount() {
    const newCount = secondCount + 1

    setSecondCount(newCount)

    console.log("Second Button Count:", newCount)
  }

  // Theme button
  function handleTheme() {

    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }

  }

  return (
    <div>

      {/* Theme Button
      <button className="theme-button" onClick={handleTheme}>
        {theme === "light" ? "Light" : "Dark"}
      </button> */}

      {/* Student Records */}
      <div className="students-container">
        {renderStudentList()}
      </div>

      {/* Buttons below student records */}
      <div className="count-container">

        {/* First Button */}
        <button onClick={handleCount}>
          Count ({count})
        </button>

        {/* Second Button */}
        <button onClick={handleSecondCount}>
          Count (0)
        </button>

      </div>

    </div>
  )
}

export default StudentList