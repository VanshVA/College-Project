import React from 'react'

export default function ForgotPassword() {
  return (
    <div className='Login-container'>
      <div className="wrapper" id="loginFormContent">
    <form action="">
      <h1>Forgot Password</h1>
      <div className="input-box">
        <input type="text" placeholder="Email" required="" />
      </div>
      <button type="submit" className="btn">
        Send Email
      </button>
    </form>
       </div>
    </div>
  )
}
