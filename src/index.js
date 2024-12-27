import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './input.css';
import Home from './component/Home/Home';
import AboutMe from './component/About/AboutME';
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home />
    <AboutMe />
    <Skills />
    <Projects />
    <Contact />
  </React.StrictMode>
);

reportWebVitals();
