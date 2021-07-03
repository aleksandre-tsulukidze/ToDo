import React from 'react';
import './css/App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Main />
      <Sidebar />
    </div>
  );
}

export default App;
