import React from "react";
import "./App.css";
import { Navbar, Home, About , AdminDashboard , Login} from "./components/index";
import { Route, Routes } from "react-router-dom";
import MaybeShowNavBar from "./components/MaybeShowNavbar";



export default function App() {
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
