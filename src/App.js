import './App.css';
import React, { useState } from 'react';
import Loading from './Components/Loading';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      {loading ? 
        <Loading onComplete={handleLoadingComplete}/>
       : 
       <div>
        <Navbar/>
        <HomePage/>
      </div>
      }
    </div>
  );
}

export default App;
