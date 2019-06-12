import React from 'react';
import Movies from './components/movies';
import Clients from './components/clients';
import NavBar from './components/navBar';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="row">
        <div className="col-md-2">
          <Clients />
        </div> 
        <main className="col-md-9">
          <Movies />
        </main>
    </div>
    </React.Fragment>
  );
}

export default App;
