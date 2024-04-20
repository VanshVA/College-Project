import "./App.css";
import { Navbar, Home, About , Admin , Login , Registration , ForgotPassword} from "./components/index";
import { Route, Routes } from "react-router-dom";
import MaybeShowNavBar from "./components/MaybeShowNavbar";
import { ToastContainer } from "react-toastify";  
import 'react-toastify/dist/ReactToastify.css';



export default function App() {
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

