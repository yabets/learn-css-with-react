import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";
import Backdrop from "./Backdrop";
import "./Sidenav.css";

const Sidenav = () => {
  const { sidenav, toggleSidenav } = useContext(AppContext);
  return (
    <>
      <Backdrop display={sidenav ? "block" : "none"} onClick={toggleSidenav} />
      {sidenav ? (
        <nav className="mobile-nav">
          <ul className="mobile-nav__items">
            <li className="mobile-nav__item">
              <Link to="/packages" onClick={toggleSidenav}>
                Packages
              </Link>
            </li>
            <li className="mobile-nav__item">
              <Link to="/customers" onClick={toggleSidenav}>
                Customers
              </Link>
            </li>
            <li className="mobile-nav__item mobile-nav__item-cta">
              <Link to="/start-hosting" onClick={toggleSidenav}>
                Start Hosting
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default Sidenav;
