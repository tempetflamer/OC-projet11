import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Accomodation from './pages/Accomodation'
import Error from './pages/Error404'
import './style.css'
import image from './assets/img/name.svg'

function App() {
  return (
    <Router>
      <Header image={image} alt="logo de Kasa" />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route path="/accommodation/:dataID" element={<Accomodation />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer image={image} alt="logo blanc de Kasa" />
    </Router>
  )
}

export default App
