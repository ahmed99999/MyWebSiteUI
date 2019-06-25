import React from 'react';
import Movies from './components/movies';
import Clients from './components/clients';

function App() {
  return (
    <div >
      <div className="col-md-2">
        <Clients />
      </div> 
      <main className="col-md-9">
        <Movies />
      </main>
    </div>
  );
}

export default App;
