import "./App.css";
import { Navbar, Home, About , Contact , Footer } from "./components/index";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";  
import 'react-toastify/dist/ReactToastify.css';



export default function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
      <ToastContainer position="top-center"></ToastContainer>
    </>
  );

}

