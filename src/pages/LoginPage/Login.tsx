import { NavLink } from "react-router";
import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">
            <NavLink to="/"> Zoker</NavLink>
          </h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Zoker.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              <NavLink to="/register"> Create a New Account</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
