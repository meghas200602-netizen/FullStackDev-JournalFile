import { useRef, useState } from 'react'
import './App.css'
import StudentList from './components/studentDetails/studentList'
import { ThemeContext } from './components/Context/themeContext'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Students from './pages/Students'


function MainPage() {

  // Theme state
  const [theme, setTheme] = useState("light")

  // Input state
  const [inputValue, setInputValue] = useState("")

  // useRef
  const inputRef = useRef(null)

  const students = [
    {
      name: "Megha Sawant",
      className: "TYBCA",
      division: "A",
      rollNo: "2408018",
      year: "Third year"
    },

    {
      name: "Megharaj Cholli",
      className: "TYBCom",
      division: "B",
      rollNo: "2408019",
      year: "Third year"
    },

    {
      name: "Pratham Sawant",
      className: "TYBBA",
      division: "A",
      rollNo: "2408005",
      year: "Third year"
    },

    {
      name: "Prasad Naik",
      className: "BCA",
      division: "B",
      rollNo: "2408006",
      year: "Third year"
    }
  ]

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>

      <div className="college-header">

        <h1>College Management System</h1>

        {/* Theme button */}
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "Light" : "Dark"}
        </button>

        <br />
        <br />

        {/* Input using useRef */}
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter anything"
        />

        <button onClick={() => inputRef.current.focus()}>
          Focus Input
        </button>

        <br />
        <br />

        {/* Navigation */}
        <Link to="/home">
          <button>Home</button>
        </Link>

        <Link to="/contacts">
          <button>Contacts</button>
        </Link>

        <Link to="/students">
          <button>Students</button>
        </Link>

        <br />
        <br />

        {/* Existing student cards */}
        <StudentList students={students} />

      </div>

    </ThemeContext.Provider>
  )
}


function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* Main College Management System page */}
        <Route path="/" element={<MainPage />} />

        {/* New pages */}
        <Route path="/home" element={<Home />} />

        <Route path="/contacts" element={<Contacts />} />

        <Route path="/students" element={<Students />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App