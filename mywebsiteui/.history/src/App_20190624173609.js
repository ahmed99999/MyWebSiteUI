import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import Movies from './components/movies';
import Clients from './components/clients';
import NavBar from './components/navBar';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';
import RegisterFrom from './components/registerFrom';
import MovieDetails from './components/movieDetails';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {};

  componentDidMount(){
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    this.setState({ user });
    console.log(user);
  }

  
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterFrom} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" render={() =>
            <div className='row'>
              <div className="col-1"></div>
              <div className="col-10">
                <Movies />
              </div>
              <div className="col-1"></div>
            </div>
          } />
          <Route path="/clients" component={Clients} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
