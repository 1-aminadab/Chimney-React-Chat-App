import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <div className='signup'>
    <div className="signup_box">
        <form className="form">
            <h2>Sign up</h2>
            <div className="inputBox">
                <input type="text" required = "reaquired" name="" id="" />
                <span>Username</span>
                <hr></hr>
            </div>
            <div className="inputBox">
                <input type="email" required = "reaquired" name="" id="" />
                <span>Email</span>
                <hr></hr>
            </div>
            <div className="inputBox">
                <input type="password" required = "reaquired" name="" id="" />
                <span>Password</span>
                <hr></hr>
            </div>
            <div className="inputBox">
                <input type="password" required = "reaquired" name="" id="" />
                <span>Confirm Password</span>
                <hr></hr>
            </div>
            <div className="links">
                <a href="#">have an account</a>
                <a href="#">Login</a>
            </div>
            <input type="submit" value="SignUp" />
        </form>
    </div>
</div>
  )
}

export default Signup