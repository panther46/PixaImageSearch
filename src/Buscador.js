import React, {useState} from 'react';

function Buscador(){

    const [search, setSearch] = useState('');

    const searchImage = (e) =>{
        e.preventDefault();
        
        // Validar 

        // Enviar datos a App

    }

    return(
        <form onSubmit = {searchImage} >
            <div className = "row">
                <div className = "form-group col-8">
                    <input
                        type="text"
                        className = "form-control form-control-lg"
                        placeholder = "Busca una imagen, ejemplo: Coches"
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
        </form>

    )

}

export default Buscador;