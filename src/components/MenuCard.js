import "./components.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuCard(props) {
  return (
    <div>
      <div className=" menuCardBody">
        <div className="menuHeadCon">
          <div className="menuHead">
            <div className="menuHeadTop"></div>
            <div className="menuHeadBot"></div>
            <span className="menuHeadIcon">
              <img src="images/user-profile-icon.png" alt="" />
            </span>
          </div>
          <div className="menuHeadInfo">
            <div className="headInfoItems">
              <h5>{props.stuName}</h5>
            </div>
            <div className="headInfoItems headInfoS">{props.stuEnroll}</div>
            <div className="headInfoItems headInfoS">{props.stuBranch}</div>
            <div className="headInfoItems headInfoLoink">
              <i className="fa-solid fa-paintbrush"></i> Add Headline
            </div>
          </div>
        </div>
        <div className="menuBodyCon">
          <ul className="menuBody">
            <li className="menuBodyItems">
              <NavLink to="/">
                <div className="BodyItemLogo">
                  <i className="fa-solid fa-house"></i>
                </div>
                <div>Home</div>
              </NavLink>
            </li>
            <hr />
            <li className="menuBodyItems">
              <NavLink to="/profile">
                <div className="BodyItemLogo">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div>Profile</div>
              </NavLink>
            </li>
            <hr />
            <li className="menuBodyItems">
              <NavLink to="/classroom">
                <div className="BodyItemLogo">
                  <i className="fa-solid fa-book-open"></i>
                </div>
                <div>Classroom</div>
              </NavLink>
            </li>
            <hr />
            <li className="menuBodyItems">
              <NavLink to="/feedback">
                <div className="BodyItemLogo">
                  <i className="fa-solid fa-comments"></i>
                </div>
                <div>Feedback</div>
              </NavLink>
            </li>
            <hr />
            <li className="menuBodyItems">
              <NavLink to="/calendar">
                <div className="BodyItemLogo">
                  <i className="fa-solid fa-calendar"></i>
                </div>
                <div>Calendar</div>
              </NavLink>
            </li>
            <hr />
            <li className="menuBodyItems">
              <NavLink to="/drive">
                <div className="BodyItemLogo">
                  <i className="fa-solid fa-folder-closed"></i>
                </div>
                <div>Drive</div>
              </NavLink>
            </li>
            <hr />
            <li className="menuBodyItems">
              <NavLink to="/campushelpcenter">
                <div className="BodyItemLogo">
                  <i className="fa-solid fa-life-ring"></i>
                </div>
                <div>Campus Help Center</div>
              </NavLink>
            </li>
            <hr />
            <li className="menuBodyItems">
              <NavLink to="/bookavenue">
                <div className="BodyItemLogo">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>Book a Venue</div>
              </NavLink>
            </li>
            <hr />
            <li className="menuBodyItems">
              <NavLink to="/studentform">
                <div className="BodyItemLogo">
                  <i className="fa-solid fa-file-pen"></i>
                </div>
                <div>Student Form</div>
              </NavLink>
            </li>
            <hr />
            <li className="menuBodyItems">
              <NavLink to="/clubs">
                <div className="BodyItemLogo">
                  <i className="fa-solid fa-people-roof"></i>
                </div>
                <div>Clubs, Chapters & Socities</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
