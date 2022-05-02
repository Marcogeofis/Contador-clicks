import React from 'react';
import '../hojas_de_estilo/Boton.css';

function Boton({ texto, esBotonDeclick, manejarClick }){
    return(
        <button
            className={esBotonDeclick ? "boton-click" : "boton-reiniciar"}
            onClick={manejarClick}
        >
            {texto}
        </button>
    )
}

export default Boton;