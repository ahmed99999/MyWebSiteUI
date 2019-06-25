import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from './services/authService';
import Movies from './components/movies';
import Clients from './components/clients';
import NavBar from './components/navBar';
import Rentals from './components/rentals';
import Logout from './components/logout';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';
import RegisterFrom from './components/registerFrom';
import MovieDetails from './components/movieDetails';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  state = {};

  componentDidMount(){
    const user = auth.getCurrentUser();
    this.setState({ user });
  }
  
  render() {
    const { user } = this.state.user;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterFrom} />
          { user && user.isAdmin && <Route path="/movies/:id" component={MovieDetails} />}
          <Route path="/movies" render={props =>
            <div className='row'>
              <div className="col-1"></div>
              <div className="col-10">
                <Movies 
                  { ...props }
                  user={this.state.user}
                />
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
