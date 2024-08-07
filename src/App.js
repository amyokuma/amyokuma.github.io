import './App.css';
import React, {useState, useEffect} from 'react';
import Loading from './Components/Loading';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
          setLoading(false)
      }, 3000)
  }, [])

  return (
    <div className="App">
      {loading ? 
        <Loading/>
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
