import React from 'react';
import Movies from './components/movies';
import Clients from './components/clients';

function App() {
  return (
    <div className="row">
      <div className="col-md-2">
        <Clients />
      </div> 
      <main className="col-md-8">
        <Movies />
      </main>
    </div>
  );
}

export default App;
