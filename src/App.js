import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import { Login } from './features/login/Login';
import { Home } from './features/home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Login /> */}
        <Home />
      </header>
    </div>
  );
}

export default App;
