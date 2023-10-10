//* importacion del Usestate y UseEffect.
import { useState ,useEffect } from "react";
//* importacion del bootstrap css?
import "bootstrap/dist/css/bootstrap.min.css";
//* importacion de bosststrap javascript
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";


function App() {
  //? estado de la pagina seleccionada.
  let [pageNumber, setPageNumber] = useState(1);
 //?se almacena toda la informacion traida.
  let [fetchedData, updateFetchedData] = useState([]);
  //?desestructurando fetchedData
  let {info, results} = fetchedData;
  // console.log(info)
  //? uso de la api.
  let API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  //? uso del useEffect para extraer los datos de la API.
  useEffect(()=>{
    (async function(){
      let data = await fetch(API).then(res=>res.json());
      // console.log(data);
      updateFetchedData(data);
    })();
  }, [API]);
  //--------------------------------------
  return (
    <div className="app">
      <h1 className="text-center ubuntu my-4"> Rick & Morty <span className="text-primary">Wiki</span></h1>
        {/* contenedor del los elementos */}
      <div className="container">
        <div className="row">
          {/* seccion filtros */}
          <div className="col-3">
            <Filters/>
          </div>
          {/* seccion cartas */}
          <div className="col-8">
            <div className="row">
              <Cards/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
