import React from 'react';

import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
import Nav from './components/Navigation';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <>
      <HeaderContainer />
     <Nav />
      
      </>
    </div>
  );
}

export default App;
