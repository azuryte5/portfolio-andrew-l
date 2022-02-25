// import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route  path="/about" element={<About/>}/>
        <Route  path='/portfolio' element={<Portfolio/>}/>
        <Route  path='/resume' element={<Resume/>}/> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
