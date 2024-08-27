import './App.css';
import React, { useState, useRef } from 'react';
import Loading from './Components/Loading';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const socialsRef = useRef(null);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      {/* {loading ? 
        <Loading onComplete={handleLoadingComplete}/>
       : 
       <div>
        <Navbar/>
        <HomePage/>
      </div>
      } */}
      <Navbar
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        socialsRef={socialsRef}
      />
      <HomePage
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        socialsRef={socialsRef}
      />
      <Footer/>
    </div>
  );
}

export default App;
