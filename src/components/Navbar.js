// rfc
import "./components.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  function toggleSignIn() {
    var x = document.getElementById("signInWrap");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <div>
      <nav className="nav-con">
        <div className="nav-int align-items-center">
          <NavLink to="/" className="dtc-logo">
            <div className="logoImg">
              <img src="images/college-logo.png" alt="" />
            </div>
            <div className="logoTxt">DTC</div>
          </NavLink>
          <form className="search-con">
            <input
              className="searchInp"
              type="text"
              placeholder="Search.."
              name="search"
            />
            <button className="searchBtn" type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <div className="nav-right">
            <button className="notifBtn">
              <i className="fa-regular fa-bell"></i>
            </button>
            <button className="userPro" onClick={toggleSignIn}>
              <i className="fa-solid fa-user"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className="sign-in-wrap sign-in-display" id="signInWrap">
        <div className="sign-in-content">
          <div className="sign-in-profile">
            <span className="user-pic">
              <img src="images/user-profile-icon.png" alt="" />
            </span>
            <h3 className="user-name">Ishan Tomar</h3>
          </div>
          <hr />
          <div className="signItemCon">
            <NavLink to="/" className="sign-in-items">
              <p>
                <i className="fa-solid fa-atom"></i> My Booths
              </p>
              <span>
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>
            <NavLink to="/" className="sign-in-items">
              <p>
                <i className="fa-solid fa-gear"></i> Settings
              </p>
              <span>
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>
            <NavLink to="/" className="sign-in-items">
              <p>
                <i className="fa-solid fa-file-contract"></i> Terms of Use
              </p>
              <span>
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>
            <NavLink to="/" className="sign-in-items">
              <p>
                <i className="fa-solid fa-headset"></i> Support
              </p>
              <span>
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>
            <NavLink to="/" className="sign-in-items">
              <p>
                <i className="fa-solid fa-right-from-bracket"></i> Logout
              </p>
              <span>
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
