import { Link } from "react-router-dom";
import Backdrop from "./Backdrop";
import "./Modal.css";
import AppContext from "../AppContext";
import { useContext } from "react";

const Modal = ({ display }) => {
  const { modal, toggleModal } = useContext(AppContext);
  return (
    <>
      <Backdrop
        display={modal === true ? "block" : "none"}
        onClick={toggleModal}
      />
      {modal ? (
        <div className="modal">
          <h1 className="modal__title">Do you want to continue?</h1>
          <div className="modal__actions">
            <Link to="/start-hosting" className="modal__action">
              Yes!
            </Link>
            <button
              type="button"
              className="modal__action modal__action--negative"
              onClick={toggleModal}
            >
              No!
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
