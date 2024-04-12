import React from "react";
import "./App.css";
import { Navbar, Home, About } from "./components/index";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
