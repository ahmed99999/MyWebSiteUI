import React from 'react';
import Movies from './components/movies';
import Clients from './components/clients';
import NavBar from './components/navBar';
import { Route, Redirect, Switch } from 'react-router-dom';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import SaveMovie from './components/saveMovie';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/movies" render = {()=>
          <div className='row'>
            <div className="col-1"></div>
            <div className="col-10">
              <Movies />
            </div>
            <div className="col-1"></div>          
          </div>
        }/>
        <Route path="/movies/:id" component={SaveMovie} />
        <Route path="/clients" component={Clients}/>
        <Route path="/rentals" component={Rentals}/>
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
