import React from "react";
import { NavLink } from "react-router-dom";
import account from "../Media/account.png";
const Nav = () => {
  return (
    <nav className="activeMenu">
      <div className="account">
        <img src={account} alt="" />
        <div className="accInfo">
          <span>Hello,</span>
          <span>User</span>
        </div>
      </div>
      <div className="links">
        <div className="sections">
          <NavLink to={"/"}>
            <span>Home</span>
            <lord-icon
              colors="primary:#171518"
              src="https://cdn.lordicon.com/slduhdil.json"
              trigger="click"
            ></lord-icon>
          </NavLink>
          <NavLink to={"/wishlist"}>
            <span>Wishlist</span>
            <lord-icon
              colors="primary:#171518"
              src="https://cdn.lordicon.com/xryjrepg.json"
              trigger="click"
            ></lord-icon>
          </NavLink>
          <NavLink to={"/cart"}>
            <span>Cart</span>
            <lord-icon
              colors="primary:#171518"
              src="https://cdn.lordicon.com/udbbfuld.json"
              trigger="click"
            ></lord-icon>
          </NavLink>
          <NavLink to={"/inbox"}>
            <span>Inbox</span>
            <lord-icon
              colors="primary:#171518"
              src="https://cdn.lordicon.com/pkmkagva.json"
              trigger="click"
            ></lord-icon>
          </NavLink>
        </div>
        <div className="moreSections">
          <NavLink to={"/notifications"}>
            <span>Notifications</span>
            <lord-icon
              colors="primary:#171518"
              src="https://cdn.lordicon.com/msetysan.json"
              trigger="click"
            ></lord-icon>
          </NavLink>
          <NavLink to={"/login"}>
            <span>Login</span>
            <lord-icon
              colors="primary:#171518"
              src="https://cdn.lordicon.com/hbvyhtse.json"
              trigger="click"
            ></lord-icon>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
