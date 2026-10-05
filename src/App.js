import './App.css';
import React, { useCallback, useLayoutEffect, useState, useRef } from 'react';
import Loading from './Components/Loading';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [revealStarted, setRevealStarted] = useState(false);
  const [heroReady, setHeroReady] = useState(false);

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const socialsRef = useRef(null);

  const handleLoadingComplete = useCallback(() => setLoading(false), []);
  const handleRevealStart = useCallback(() => setRevealStarted(true), []);
  const handleHeroRevealComplete = useCallback(() => setHeroReady(true), []);

  useLayoutEffect(() => {
    if (!loading && heroReady) return undefined;

    const html = document.documentElement;
    const body = document.body;
    const originalStyles = {
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyWidth: body.style.width,
      bodyPaddingRight: body.style.paddingRight,
      htmlOverflow: html.style.overflow,
    };
    const hadOverflowClass = body.classList.contains('overflow-hidden');
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    const lockScrollY = 0;

    window.scrollTo(0, lockScrollY);
    body.classList.add('overflow-hidden');
    html.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `${-lockScrollY}px`;
    body.style.width = '100%';
    if (scrollbarWidth > 0) {
      const existingPadding = parseFloat(window.getComputedStyle(body).paddingRight) || 0;
      body.style.paddingRight = `${existingPadding + scrollbarWidth}px`;
    }

    const preventScroll = (event) => event.preventDefault();
    const preventKeyboardScroll = (event) => {
      const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
      if (scrollKeys.includes(event.key)) event.preventDefault();
    };
    const keepAtHeroStart = () => {
      if (window.scrollY !== lockScrollY) window.scrollTo(0, lockScrollY);
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventKeyboardScroll);
    window.addEventListener('scroll', keepAtHeroStart, { passive: true });

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeyboardScroll);
      window.removeEventListener('scroll', keepAtHeroStart);
      body.style.overflow = originalStyles.bodyOverflow;
      body.style.position = originalStyles.bodyPosition;
      body.style.top = originalStyles.bodyTop;
      body.style.width = originalStyles.bodyWidth;
      body.style.paddingRight = originalStyles.bodyPaddingRight;
      html.style.overflow = originalStyles.htmlOverflow;
      if (!hadOverflowClass) body.classList.remove('overflow-hidden');
      window.scrollTo(0, lockScrollY);
    };
  }, [loading, heroReady]);

  return (
    <div className="App w-full min-w-0">
      {loading && 
        <Loading onComplete={handleLoadingComplete} onRevealStart={handleRevealStart}/>
      }
      <Navbar
        isLoading={!revealStarted}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
        socialsRef={socialsRef}
      />
      <HomePage
        isLoading={!revealStarted}
        onHeroRevealComplete={handleHeroRevealComplete}
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
