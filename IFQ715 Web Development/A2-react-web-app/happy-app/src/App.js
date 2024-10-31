//src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./User/Login";
import Register from "./User/Register";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './App.css';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Factors from "./Factors";
import ProtectedRoute from "./ProtectedRoute";
import React from 'react';
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
<BrowserRouter>
<div className="d-flex flex-column bg-light" id ="wrapper">
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Container fluid classname="pt-2">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route 
            path="/factors" 
            element={
                <ProtectedRoute element={<Factors />} />
                } 
        />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Container>
    <Footer/>
</div>
</BrowserRouter>
  );
}

export default App;
