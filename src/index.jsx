import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

import "./style.css"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


//deplacement et ustilsiation de app.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// import Header from './components/Header'
// //import Footer from './components/Footer'
// import Home from './pages/Home'
// import About from './pages/About'
// import House from './pages/House'
// import Error from './pages/404'

// import "./style.css"
// import image from "./assets/img/name.svg";




// import './index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <Router>
// {/*       <ThemeProvider>
//         <SurveyProvider>
//           <GlobalStyle /> */}
//           <Header image={image} alt="logo de Kasa" />
//           <Routes>
//             <Route exact path="/" element={<Home />}></Route>
//             <Route path="/about" element={<About />}></Route>
//             <Route path="/house" element={<House />}></Route>
//             <Route path="*" element={<Error />}></Route>
//           </Routes>
//           {/* <Footer /> */}
//         {/* </SurveyProvider>
//       </ThemeProvider> */}
//     </Router>
//   </React.StrictMode>
// )

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
