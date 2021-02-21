import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PieChartIcon from "@material-ui/icons/PieChart";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MapIcon from "@material-ui/icons/Map";

const Nav = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className={isActive ? "reduce-width" : "nav-container"}>
      <div className="btn-toggle">
        <button onClick={handleToggle} className="btn-collapse">
          &#9776;
        </button>
      </div>
      <div className="dash-elements">
        <NavLink
          exact
          activeClassName="active-element"
          className="not-active"
          to="/"
        >
          <div className="dash-icon">
            <PieChartIcon fontSize="large" />
          </div>
          <div className={isActive ? "content-hide" : "dash-element-content"}>
            <h3>Dashboard</h3>
          </div>
        </NavLink>
      </div>
      <div className="dash-elements">
        <NavLink
          exact
          activeClassName="active-element"
          className="not-active"
          to="/userprofile"
        >
          <div className="dash-icon">
            <img src="./img/user.svg" alt="user icon" />
          </div>
          <div className={isActive ? "content-hide" : "dash-element-content"}>
            <h3>Userprofile</h3>
          </div>
        </NavLink>
      </div>
      <div className="dash-elements">
        <NavLink
          exact
          activeClassName="active-element"
          className="not-active"
          to="/form"
        >
          <div className="dash-icon">
            <MailOutlineIcon fontSize="large" />
          </div>
          <div className={isActive ? "content-hide" : "dash-element-content"}>
            <h3>Form</h3>
          </div>
        </NavLink>
      </div>
      <div className="dash-elements">
        <NavLink
          exact
          activeClassName="active-element"
          className="not-active"
          to="/map"
        >
          <div className="dash-icon">
            <MapIcon fontSize="large" />
          </div>
          <div className={isActive ? "content-hide" : "dash-element-content"}>
            <h3>Map</h3>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
