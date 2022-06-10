import React from "react";
import { Link } from "react-router-dom";

const styles = {
  navB: {
    fontFamily: "'Trade Winds', cursive",
  },
  imgB: {
    marginRight: "10px",
    width: "40px",
    height: "40px",
  },
};

const Navbar = () => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/">
          <i className="fas fa-user"></i> <span className="hide-sm">Home</span>
        </Link>
      </li>
      <li>
        <Link to="/">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link className="gradient-text" to="/" style={styles.navB}>
          <img src="images/logoA.png" style={styles.imgB} alt="logo" />
          HalfTime
        </Link>
      </h1>

      {guestLinks}
    </nav>
  );
};

export default Navbar;
