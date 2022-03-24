// import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Navigation";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route  path="portfolio-andrew-l/" element={<About/>}/>
        <Route  path='portfolio-andrew-l/portfolio' element={<Portfolio/>}/>
        <Route  path='portfolio-andrew-l/resume' element={<Resume/>}/> 
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
