import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
