import "./Header.css";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import AppContext from "../AppContext";
import { useContext } from "react";

const Header = () => {
  const Logo = "images/uhost-icon.png";
  const { toggleSidenav } = useContext(AppContext);
  return (
    <header className="main-header">
      <div>
        <Burger toggleSidenav={toggleSidenav} />
        <Link className="main-header__brand" to="/">
          <img src={Logo} alt="uHost - logo" />
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <Link to="/packages">Package</Link>
          </li>
          <li className="main-nav__item">
            <Link to="/customers">Customers</Link>
          </li>
          <li className="main-nav__item main-nav__item-cta">
            <Link to="/start-hosting">Start Hosting</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
