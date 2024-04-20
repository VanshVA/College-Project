import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar, Home, About , AdminDashboard , Login} from "./components/index";
import { Route, Routes } from "react-router-dom";
import MaybeShowNavBar from "./components/MaybeShowNavbar";
function App() {
  return (
    <>
    <MaybeShowNavBar>
    <Navbar></Navbar>
    </MaybeShowNavBar>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
