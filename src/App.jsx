import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Home, About , Admin , Login , Registration , ForgotPassword} from "./components/index";
import { Route, Routes } from "react-router-dom";
import MaybeShowNavBar from "./components/MaybeShowNavbar";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";  
import 'react-toastify/dist/ReactToastify.css';



export default function App() {
=======
function App() {
>>>>>>> bfe037db8451573213538a99ff15053dc5cbae0d
  return (
    <>
    <MaybeShowNavBar>
    <Navbar></Navbar>
    </MaybeShowNavBar>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
      <ToastContainer position="top-center"></ToastContainer>
    </>
  );
}
export default App;
