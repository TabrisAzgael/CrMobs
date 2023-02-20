import React, { useState } from "react";
import LI from "./LI"
import Style from "./Style"



const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    if (event.target.closest('.dropdown') === null) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  });

  return (
    <div className="dropdown">
      <button style={Style.butt} onClick={toggleDropdown}>
      <img style={Style.img} alt="leButong" src={"./button.png"} />
      </button>
      {isOpen && (
        <ul  style={Style.ul} >
          <LI >Guardar</LI>
          <LI>Guardar como...</LI>
          <LI>Cargar</LI>
          <LI>Imprimir</LI>
          <LI>Desconectar</LI>
        </ul>
      )}
    </div>
  );
};

export default Menu;