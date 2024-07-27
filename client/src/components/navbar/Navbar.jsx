import { useState } from "react";
import "./navbar.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="./logoo.png" alt="" />
          <span>RealtyVue</span>
        </a>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <span>Patan Lal</span>
            <Link className="profile" to="/profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="">Sign in</a>
            <a href="" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="./menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="">
            <i className="fas fa-home"></i> Home
          </a>
          <a href="">
            <i className="fas fa-info-circle"></i> About
          </a>
          <a href="">
            <i className="fas fa-envelope"></i> Contact
          </a>
          <a href="">
            <i className="fas fa-user"></i> Agents
          </a>
          <a href="">
            <i className="fas fa-sign-in-alt"></i> Sign in
          </a>
          <a href="" className="register">
            <i className="fas fa-user-plus"></i> Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
