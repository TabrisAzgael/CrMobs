import { Component } from "react";
import React, { useState } from "react";

const style = {
    butt: {
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: '#24212c',
        margin: '10px',
        color: '#740e8be6',
        fontSize: '1em',
        cursor: 'pointer',
        fontFamily:'serif',
    },
    div: {
        padding: '5px',
        position: 'fixed',
        backgroundColor:'#24212c',
        color: '#9c9cde',
        top:'41px',
        left: '12px',
        fontFamily: 'serif',
    },
}
const Button = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div>
        <button onClick={() => setIsOpen(!isOpen)} style={style.butt}>
            Leyenda
        </button>
        {isOpen && (
        <div style={style.div} >
            Bicbicbic, bic cristal
        </div>
        )}
      </div>
    );
  };

export default Button
