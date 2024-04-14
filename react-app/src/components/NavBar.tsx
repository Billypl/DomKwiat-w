import "../styles/NavBar.css";
import logo from "@assets/kwiaciarnia.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <div className="logoSection">
        <Link to="/">
          <img src={logo} />
          <header>Dom Kwiatów</header>
        </Link>
      </div>
      <div
        className={(isNavOpen ? "open " : "") + "hamburger"}
        onClick={() => toggleNav()}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="navOptions">
        <li>
          <Link to="/">Strona główna</Link>
        </li>
        <li>
          <Link to="/o-nas">O nas</Link>
        </li>
        <li>
          <Link to="/oferta">Oferta</Link>
        </li>
        <li>
          <Link to="/produkty">Produkty</Link>
        </li>
        <li>
          <Link to="/kwiatomaty">Kwiatomaty</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
