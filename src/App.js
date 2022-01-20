import React from 'react';
import './App.css';
import RoutesApp from './routes';
import Header from './components/header/header.component';

function App() {
  return (
    <div>      
      <Header/>
      <RoutesApp/>
    </div>
  );
}

export default App;
