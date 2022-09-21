import "../styles/Header.css";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { Link as LinkRouter } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export default function Header() {
  let user = "";
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const [open, setOpen] = useState(false);
  const menuIcon = useRef(null);

  const handleCloseMenu = (event) => {
    const isClickInside = menuIcon.current.contains(event.target);

    if (menuIcon.current !== event.target && !isClickInside) {
      setOpen(false);
    }
  };

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.addEventListener("click", handleCloseMenu);

    return () => {
      document.removeEventListener("click", handleCloseMenu);
    };
  }, []);

  return user !== "" ? (
    <div className="Header-container">
      <LinkRouter to="/"><img className="Header-logo" src="/img/Logo-nav.png" alt="logo-header"></img>
      </LinkRouter><div className="Header-right">
        <MobileNav />
        <Nav />
        {open && (<div className="Header-user">
          <LinkRouter className="Header-option" to="mytineraries">MyTinerary</LinkRouter>
          <LinkRouter className="Header-option" to="auth/signin">Sign Out</LinkRouter>
          </div>
        )}
        <img className="Header-avatar"    src={user !== "" ? `${user.photo}` : "https://i.imgur.com/CNe5NKD.png"} alt="user-avatar" ref={menuIcon} onClick={handleToggleMenu}/>
      </div>
    </div>
  ) : (
    <div className="Header-container">
      <LinkRouter to="/">
        <img
          className="Header-logo"
          src="/img/Logo-nav.png"
          alt="logo-header"
        ></img>
      </LinkRouter>
      <div className="Header-right">
        <MobileNav />
        <Nav />
        {open && (
          <div className="Header-user">
            <LinkRouter className="Header-option" to="auth/signin">
              Sign In
            </LinkRouter>
            <LinkRouter className="Header-option" to="auth/signup">
              Sign Up
            </LinkRouter>
          </div>
        )}
        <img
          className="Header-avatar"
          src={
            user !== "" ? `${user.photo}` : "https://i.imgur.com/CNe5NKD.png"
          }
          alt="user-avatar"
          ref={menuIcon}
          onClick={handleToggleMenu}
        />
      </div>
    </div>
  );
}
