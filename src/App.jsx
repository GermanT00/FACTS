import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}

export default App;
