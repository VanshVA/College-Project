import { Link } from 'react-router-dom'
import './Authentication.css'
function Login() {

  return ( 
<>
    <div className='Login-container'>
      <div className="wrapper" id="loginFormContent">
    <form action="">
      <h1>Login</h1>
      <div className="input-box">
        <input type="text" placeholder="Username" required="" />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Password" required="" />
      </div>
      <div className="checkbox1">
        <Link to="/forgotPassword"><label htmlFor="forgotForm">Forgot Password</label></Link>
      </div>
      <button type="submit" className="btn">
        Login
      </button>
      <div className="link">
        <p>
          Don't have an account? <Link to="/registration"><label htmlFor="registerForm">Register</label></Link>
        </p>
      </div>
    </form>
       </div>
    </div>
</>

  )
}
export default Login