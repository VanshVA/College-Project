import React from 'react'
import './App.css';
import { Navbar, Home, About } from './components/index'
import { Route , Routes } from 'react-router-dom';

export default function App() {
  return (
    <> 
    <Navbar></Navbar>
    <Routes>
    {/* <Route path="/admin" element={<Admin/>} /> */}
    </Routes>
    <Home></Home>
    <About></About>
    </>
  )
}

