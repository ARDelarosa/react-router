
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Blue from './components/Blue'
import Red from  './components/Red'
import Home from './components/Home'

function App() {
  

  return (
    <>
      <div id="container">
        <Link to="/">Home</Link>
      <h1>Choose which two colors...</h1>
      <div id="navbar">
        <Link to="/blue">This is blue!</Link>
        <Link to="/red">This is red!</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
