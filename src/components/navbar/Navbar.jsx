import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>PrIsM | Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <span>Sumeetkumar</span>
            <Link to="/profile" className="profile">
              <div className="notification">10</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
