import React from "react";

const context = {
  modal: false,
  toggleModal: () => {
    this.modal = !this.modal;
  },
};

const AppContext = React.createContext(context);

export default AppContext;
