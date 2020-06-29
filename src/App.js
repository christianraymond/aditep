import React from 'react';
import NavigationMenu from './components/Navigation/NavigationMenu';
import Home from './components/Contents/LandingPage/Home';
import Footer from './components/Footer/Footer'
import './App.css'


function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
