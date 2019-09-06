import React, {useState, useEffect} from 'react';
import Buscador from './Buscador';
import List from './imageList';


function App() {

  // Objeto principal que viene con datos del componente BUscador
  const [mainData, setData] = useState('');
  // Objeto preparado para la grid de imagenes
  const [images, setImages] = useState([]);
  // Estados de compaginado
  const [currentPage, setCurrentPage] = useState(1);
  // Estados para calcular total de paginas en base a las imagenes que suministra la API
  const [totalPages, setTotalPages] = useState(1);

  useEffect (() =>{

    const consultarApi = async () =>{
      if (mainData === '') return;
      // Parametro de API imagenes a pasar por pagina, por defecto 20.
      const imagesPerPage = 30;
      // Key de pixabay
      const key = '13512871-802557b46c55675c7aace1c68';

      const url = `https://pixabay.com/api/?key=${key}&q=${mainData}&per_page=${imagesPerPage}&page=${currentPage}`;


      // usando fecth para hacer el request, luego extraemos la respuesta con .json
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      
      // Guardamos en estado las imagenes procesadas
      setImages(resultado.hits);

      // Calculando el total de paginas en base a la busqueda (imagenes generadas)
      console.log(resultado);
      // Guardamos en el estado totalPages, el resultado del calculo redondeando hacia arriba con el metodo.ceil. 
      // Queda guardado en el estado el numero de paginas en base a las imagenes generadas.
      setTotalPages(Math.ceil(resultado.totalHits / imagesPerPage));

      // scrooll effect
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth', block:'end'});
      


    }
    consultarApi();

  },[mainData, currentPage]);

// funcion para Pagina anterior (retroceder)
const previousPage = () =>{

  let newPreviousPage = currentPage - 1;

  setCurrentPage(newPreviousPage)
}
// funcion para Pagina siguiente (siguiente)
const nextPage = () =>{
  let newNextPage = currentPage + 1;

  setCurrentPage(newNextPage);
}

  return (
    <div className ="App container">
      <div className = "jumbotron">
        <p className ="lead text-center">Image search Engine</p>
        <Buscador
        setData = {setData}
        />
      </div>
      
      <div className = "row justify-content-center">
        <List
        images={images}
        />
        {(currentPage === 1) ? null:(
         <button onClick ={previousPage} type = "button" className = "btn btn-info mr-1">&laquo; Previous</button>
        )}
        {(currentPage === totalPages) ? null:(
          <button onClick = {nextPage} type = "button" className = "btn btn-info mr-1">&raquo; Next &raquo;</button>
        )}
        
      
      </div>

    </div>
  );
}

export default App;
