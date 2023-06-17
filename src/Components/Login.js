import React from "react";
import welc from "../Media/welcome.png";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <img src={welc} alt="" />
      <form action="">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <div className="forget">Forgotten password?</div>
        <button className="formBtn">Login</button>
        <div className="dont">
          don't have Account ? <Link to="/signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
