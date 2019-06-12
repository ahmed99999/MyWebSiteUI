import React from 'react';
import Movies from './components/movies';
import Clients from './components/clients';
import NavBar from './components/navBar';
import { Route, Redirect } from 'react-router-dom';
import Rentals from './components/rentals';
import NotFound from './components/notFound';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route path="/movies" render = {()=>
        <div className='row'>
          <div className="col-1"></div>
          <div className="col-10">
            <Movies />
          </div>
          <div className="col-1"></div>          
        </div>
      }/>
      <Route path="/clients" component={Clients}/>
      <Route path="/rentals" component={Rentals}/>
      <Route path="/not-found" component={NotFound} />
      <Route path="/" exact component={Movies} />
      <Redirect to="/not-found" />
    </React.Fragment>
  );
}

export default App;
