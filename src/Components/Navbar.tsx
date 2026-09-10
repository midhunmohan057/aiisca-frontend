import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePageContext } from "vike-react/usePageContext";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Vike's way of getting the current URL
  const pageContext = usePageContext();
  const currentPath = pageContext.urlPathname;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => (currentPath === path ? "active" : "");

  return (
    <nav className="navbar-container">
      <div className="logo-container">
        <a href="/">
          <img src="/logo2.png" alt="Your Logo" className="logo" />
        </a>
      </div>
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <ul>
          <li className={isActive("/")}>
            <a onClick={toggleMenu} href="/">Home</a>
          </li>
          <li className={isActive("/manifesto")}>
            <a onClick={toggleMenu} href="/manifesto">Manifesto</a>
          </li>
          <li className={isActive("/demands")}>
            <a onClick={toggleMenu} href="/demands">Demands</a>
          </li>
          <li className={isActive("/event")}>
            <a onClick={toggleMenu} href="/event">Event</a>
          </li>
          <li className={isActive("/gallery")}>
            <a onClick={toggleMenu} href="/gallery">Gallery</a>
          </li>
          <li className={isActive("/contact")}>
            <a onClick={toggleMenu} href="/contact">Contact Us</a>
          </li>
          <li className={isActive("/membership")}>
            <a onClick={toggleMenu} href="/membership">Membership</a>
          </li>
          <li className={isActive("/blog")}>
            <a onClick={toggleMenu} href="/blog">TAC</a>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;