import './Login.css'
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
        <label>
          <input type="checkbox" />
          Remember Me
        </label>
        <label htmlFor="forgotForm">Forgot Password</label>
      </div>
      <button type="submit" className="btn">
        Login
      </button>
      <div className="link">
        <p>
          Don't have an account? <label htmlFor="registerForm">Register</label>
        </p>
      </div>
    </form>
       </div>
    </div>
</>

  )
}
export default Login