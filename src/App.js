import React, {useState, useEffect} from 'react';
import Buscador from './Buscador';


function App() {

  const [mainData, setData] = useState('');

  useEffect (() =>{

    const consultarApi = async () =>{
      if (mainData === '') return;
      // Parametro de API imagenes a pasar por pagina, por defecto 20.
      const imagesPerPage = 30;
      // Key de pixabay
      const key = '13512871-802557b46c55675c7aace1c68';

      const url = `https://pixabay.com/api/?key=${key}&q=${mainData}&per_page=${imagesPerPage}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json()
      console.log(resultado);

    }
    consultarApi();

  },[mainData]);

  return (
    <div className ="App container">
      <div className = "jumbotron">
        <p className ="lead text-center">Image search Engine</p>
        <Buscador
        setData = {setData}
        />
      </div>
      
      <div className = "row justify-content-center">
      
      </div>

    </div>
  );
}

export default App;
