import React, {useState, useEffect} from 'react';
import Buscador from './Buscador';


function App() {

  const [mainData, setData] = useState('');

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
