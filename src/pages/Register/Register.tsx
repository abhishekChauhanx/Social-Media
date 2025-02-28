import { NavLink } from "react-router"
import "./register.css"

const Register = () => {
  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo"><NavLink to="/"> Zoker</NavLink></h3>
        <span className="loginDesc">
          Connect with friends and the world around you on Zoker.
        </span>
      </div>
      <div className="loginRight">
        <div className="loginBox">
          <input placeholder="Username" className="loginInput" />
          <input placeholder="Email" className="loginInput" />
          <input placeholder="Password" className="loginInput" />
          <input placeholder="Password Again" className="loginInput" />
          <button className="loginButton">Sign Up</button>
          <button className="loginRegisterButton">
          <NavLink to="/login">Log into Account</NavLink>
            
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register
