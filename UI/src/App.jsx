import React from 'react'
import Navbar from "./Components/Navbar/Navbar"
import HomePage from "./routes/Homepage/Homepage"
import './index.scss'
import './layout.scss'

const App = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
      <HomePage/>
      </div>
    </div>
  )
}



export default App