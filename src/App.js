import React from 'react';
import Hl2 from './img/Hl2.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
//import CantidadHalfLife from './components/CantidadHalfLife';
//import CompraHalfLife from './components/CompraHalfLife';
import { Provider } from 'react-redux';
import store from './redux/store';
import CantidadHook from './components/CantidadHook';
import CompraHook from './components/CompraHook';
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';

function App() {
  return (
    <Provider store={store}>
    <div className="App container">
      <div className="row">
       <div className="col-12">

         <div className="card mt-5" style={{maxWidth: '580px'}}>
           <div className="row no-gutters">
            <div className="col-5">
              <img src={Hl2} alt="Half Life" className="card-img" />              
            </div>

            <div className="col-5">
             <div className="card-body">
              <div className="card-title h3 text-center">
                <CantidadHook />
              </div>
              <CompraHook />
             </div>
            </div>
           </div>
         </div>
       </div>
       <div className="col-12 mt-4 border-top pt-3">
         <BuscadorPokemon />
      </div>
      <div className="col-12">
         <ResultadoPokemon />
      </div> 
      </div>
    </div>
  </Provider>
  );
}

export default App;
