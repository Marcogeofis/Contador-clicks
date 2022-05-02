// importamos nuestra imagen  
import logoClick from './imagenes/manzana.jpg';
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';


function App() {
  const [numClicks, setNumclicks] = useState(0);

  const manejarClick = ()=>{
    setNumclicks(numClicks + 1)
  }

  const reiniciarContador = () =>{
    setNumclicks(0)
  }
  return (
    <div className="App">
      <div className="contenedor-del-logo">
        <img
          className="logo_manzana"
          src={logoClick}
          alt="logo manzana "  
        />
        <div className="contenedor-contador">
          <Contador
            numClicks={numClicks}
            className="contador"
          />
          <Boton
            texto="Click"
            esBotonDeclick={true}
            manejarClick={manejarClick}
          />
          <Boton 
            texto="Reiniciar"
            esBotonDeclick={false}
            manejarClick={reiniciarContador}
          />
        </div>
      </div>       
    </div>
  );
}

export default App;
