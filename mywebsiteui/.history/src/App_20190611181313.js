import React from 'react';
import Movies from './components/movies';
import Clients from './components/clients';
import NavBar from './components/navBar';
import { Route } from 'react-router-dom';
import Rentals from './components/rentals';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route path="/movies" render = {()=>{
        <div className='row'>
          <div className="col-1"></div>
          <Movies className="col-10"/>          
          <div className="col-1"></div> 
        </div>
      }}/>
      <Route path="/clients" component={Clients}/>
      <Route path="/rentals" component={Rentals}/>
    </React.Fragment>
  );
}

export default App;
