import "../styles/NavBar.css";
import logo from "../assets/kwiaciarnia.png";
import { useState } from "react";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <div className="logoSection">
        <a href="/">
          <img src={logo} />
          <header>Dom Kwiatów</header>
        </a>
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
          <a href="/">Strona główna</a>
        </li>
        <li>
          <a href="/o-nas">O nas</a>
        </li>
        <li>
          <a href="/oferta">Oferta</a>
        </li>
        <li>
          <a href="/produkty">Produkty</a>
        </li>
        <li>
          <a href="/kwiatomaty">Kwiatomaty</a>
        </li>
        <li>
          <a href="kontakt">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
