import React from 'react';
import Movies from './components/movies';
import Clients from './components/clients';

function App() {
  return (
    <React.Fragment>
      <div>
        <Clients />
      </div> 
      <main className="container">
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;
