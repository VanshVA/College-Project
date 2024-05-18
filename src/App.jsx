import "./App.css";
import { Navbar, Home, About , Admin , Login , Registration , ForgotPassword, Services , Contact , Footer} from "./components/index";
import { Route, Routes } from "react-router-dom";
import Loader from '../src/components/Loader/Loader'
export default function App() {  return (
     <>
    <Loader></Loader>   
    <Navbar></Navbar>  
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
      <About></About>
      <Services></Services> 
      <Contact></Contact>
      <Footer></Footer>
    </>
  );

}

