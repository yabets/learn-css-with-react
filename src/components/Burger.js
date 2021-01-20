import "./Burger.css";

const Burger = ({ toggleSidenav }) => {
  return (
    <button className="toggle-button" onClick={toggleSidenav}>
      <span className="toggle-button__bar"></span>
      <span className="toggle-button__bar"></span>
      <span className="toggle-button__bar"></span>
    </button>
  );
};

export default Burger;
