import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const navigationItems = [
  { label: 'about', section: 'aboutRef' },
  { label: 'experience', section: 'experienceRef' },
  { label: 'projects', section: 'projectsRef' },
  { label: 'socials', section: 'socialsRef' },
];

function Navbar({ isLoading, aboutRef, experienceRef, projectsRef, socialsRef }) {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 100);
  const navbarRef = useRef(null);
  const sectionRefs = { aboutRef, experienceRef, projectsRef, socialsRef };
  const showMenu = isScrolled && !isLoading;

  useGSAP(() => {
    if (isLoading) return undefined;

    gsap.fromTo(navbarRef.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.9, ease: 'power3.out' },
    );
    return undefined;
  }, { scope: navbarRef, dependencies: [isLoading] });

  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      const element = elementRef.current;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const centeringOffset = Math.max(0, (window.innerHeight - element.offsetHeight) / 2);

      window.scrollTo({
        top: Math.max(0, elementTop - centeringOffset),
        behavior: 'smooth'
      });
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => setSidebarOpen((isOpen) => !isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const originalNav = navbarRef.current?.querySelector('nav');
      const navHeight = originalNav?.offsetHeight || 100;
      setIsScrolled(window.scrollY > navHeight);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isSidebarOpen]);

  return (
    <div ref={navbarRef} className={`relative z-20 bg-[#D6D1C8] nav:bg-transparent ${isLoading ? 'pointer-events-none opacity-0' : ''}`}>
      <nav className={`bg-transparent flex justify-between nav:items-center pl-7 pr-2 nav:px-20 xl:px-28 pt-8 transition-[opacity,transform,visibility] duration-300 ease-out ${isLoading || isScrolled ? 'invisible -translate-y-3 opacity-0 pointer-events-none' : 'visible translate-y-0 opacity-100'}`}>
        <a className="bg-transparent font-GeneralSans font-bold text-2xl nav:text-3xl 2xl:text-4xl text-[#78716B] cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-3" href="/">AMOK*</a>
        <ul className="bg-transparent text-xl nav:flex nav:text-2xl text-[#78716B]">
          {navigationItems.map(({ label, section }) => (
            <li key={label} className="bg-transparent nav:px-4 xl:px-6">
              <button type="button" onClick={() => scrollToSection(sectionRefs[section])} className="bg-transparent cursor-pointer hover:opacity-60">
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-hidden={!showMenu}
        tabIndex={showMenu ? 0 : -1}
        style={{
          opacity: showMenu ? 1 : 0,
          visibility: showMenu ? 'visible' : 'hidden',
          transform: showMenu ? 'translateY(0)' : 'translateY(-0.75rem)',
        }}
        className={`nav:m-5 2xl:m-5 m-3 fixed top-4 right-4 z-50 text-4xl text-[#F6F4EF] transition-[opacity,transform,visibility] duration-[450ms] ease-out ${showMenu ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <i className={`fa-solid ${isSidebarOpen ? 'fa-times' : 'fa-bars'} inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#9EACC0] p-0 text-3xl nav:h-20 nav:w-20 nav:text-5xl transition-transform duration-100 ease-in-out hover:scale-90`}></i>
      </button>
      <div 
        className={`fixed top-0 right-0 z-40 h-full w-[min(100%,48rem)] overflow-hidden bg-[#D6D1C8] shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <ul className="sidebar-navigation flex flex-col w-full pt-28 pl-6 space-y-10 bg-transparent text-5xl nav:text-7xl text-[#7089AF]">
          {navigationItems.map(({ label, section }) => (
            <li key={label} className="bg-transparent">
              <button type="button" onClick={() => scrollToSection(sectionRefs[section])} className="font-GeneralSans font-extrabold px-6 cursor-pointer bg-transparent transition-transform duration-300 ease-in-out hover:translate-x-5 hover:opacity-70">
                {label.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
        <div className="absolute -bottom-8 -right-24 h-[clamp(18rem,42vw,30rem)] w-[clamp(18rem,42vw,30rem)] rounded-full bg-[#78716B] opacity-50"></div>
        <div className="absolute -bottom-32 -right-10 h-[clamp(18rem,42vw,30rem)] w-[clamp(18rem,42vw,30rem)] rounded-full bg-[#B9B3A9] opacity-75"></div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={toggleSidebar}></div>
      )}

    </div>
  )
}

export default Navbar
