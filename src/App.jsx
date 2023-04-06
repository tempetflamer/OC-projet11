/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import House from './pages/House'
import Error from './pages/Error404'

import "./style.css"
import image from "./assets/img/name.svg";

function App() {
  return (
    <Router>
      {/*       <ThemeProvider>
            <SurveyProvider>
              <GlobalStyle /> */}
      <Header image={image} alt="logo de Kasa" />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route path="/house" element={<House />}></Route>
        {/* <Route path="*" element={<Error />}></Route> */}
      </Routes>
      <Footer image={image} alt="logo blanc de Kasa"/>
      {/* </SurveyProvider>
          </ThemeProvider> */}
    </Router>
  );
}

export default App;
