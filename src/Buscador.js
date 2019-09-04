import React, {useState} from 'react';
import Error from './Error';

function Buscador({setData}){

    const [search, setSearch] = useState('');
    const [error, setError] = useState(false);

    const searchImage = (e) =>{
        e.preventDefault();
        
        // Validar 
        if (search === '') {
            setError(true);
            return;
        }
        // Cambiando a false despues de validacion
        setError(false);
        // Enviar datos a App
        setData(search);
        
    }
    // Logica de presentacion de error, antes del return, posteriormente llamada en la maqueta.
    const errorComponent = (error ? <Error mensaje = "Please add a search term"/>: null);

    return(
        <form onSubmit = {searchImage} >
            <div className = "row">
                <div className = "form-group col-8">
                    <input
                        type="text"
                        className = "form-control form-control-lg"
                        placeholder = "Busca una imagen, ejemplo: Coches"
                        onChange = {(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className = "form-group col-4">
                    <input
                        type = "submit"
                        className = "btn btn-lg btn-danger btn-block"
                        value = "Buscar"
                    />
                </div>
            </div>
            {errorComponent}
        </form>

    )

}

export default Buscador;