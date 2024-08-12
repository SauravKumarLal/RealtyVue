import { useContext, useState } from "react";
import "./navbar.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from "../../lib/notificationStore";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const fetch = useNotificationStore((state) => state.fetch);
  const number = useNotificationStore((state) => state.number);

  if (currentUser) fetch();

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="./logoo.png" alt="" />
          <span>RealtyVue</span>
        </a>
        <a href="/">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link className="profile" to="/profile">
              {number > 0 && <div className="notification">{number}</div>}
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
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
