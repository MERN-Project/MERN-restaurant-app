import React from 'react';
import './App.css';
import NavBar from './components/Layout/NavBar'
import Carousel from './components/Layout/carousel'
import Container from './container/Container'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carousel/>
      <Container/>
    </div>
  );
}

export default App;
