import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="login">
      <h3>Create New Account</h3>
      <form action="">
        <input type="text" placeholder="@Username" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Re-Type Password" />
        <button className="formBtn pt25">Sign Up</button>
        <div className="dont">
          Have An Account ? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
