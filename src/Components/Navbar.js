import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap'
import{ useGSAP } from '@gsap/react'

function Navbar({ aboutRef, experienceRef, projectsRef, socialsRef }) {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
      });
      setSidebarOpen(false);
    } else {
      console.error("Invalid ref passed to scrollToSection:", elementRef);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setIsScrolled(true);
      }
      else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="bg-transparent">
      <nav className={`bg-transparent flex justify-between xl:items-center pl-7 pr-2 xl:px-28 pt-8 ${isScrolled ? 'hidden' : 'block'}`}>
        <a className="bg-transparent font-GeneralSans font-bold text-2xl xl:text-4xl text-[#78716B] cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-3" href="/">AMOK*</a>
        <ul className="bg-transparent text-xl xl:flex xl:text-2xl text-[#78716B]">
          <li onClick={() => scrollToSection(aboutRef)} className="bg-transparent xl:px-6 cursor-pointer hover:opacity-60">about</li>
          <li onClick={() => scrollToSection(experienceRef)} className="bg-transparent xl:px-6 cursor-pointer hover:opacity-60">experience</li>
          <li onClick={() => scrollToSection(projectsRef)} className="bg-transparent xl:px-6 cursor-pointer hover:opacity-60">projects</li>
          <li onClick={() => scrollToSection(socialsRef)} className="bg-transparent xl:px-6 cursor-pointer hover:opacity-60">socials</li>
        </ul>
      </nav>

      <button onClick={toggleSidebar} className={`xl:m-5 m-3 fixed top-4 right-4 text-4xl z-50 ${isScrolled ? 'block' : 'hidden'} text-[#F6F4EF]`}>
        <i class={`fa-solid ${isSidebarOpen ? 'fa-times' : 'fa-bars'} bg-[#9EACC0] xl:text-5xl text-3xl rounded-full py-3 px-4 xl:py-4 xl:px-5 transition-transform duration-100 ease-in-out hover:scale-90`}></i>
        </button>
      <div 
        className={`fixed top-0 right-0 h-full w-full xl:w-[48rem] bg-[#CFCABF] z-40 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <ul className="flex flex-col w-full pt-28 pl-6 space-y-10 bg-transparent text-5xl xl:text-7xl text-[#7089AF]">
          <li onClick={() => scrollToSection(aboutRef)} className="font-GeneralSans font-extrabold px-6 cursor-pointer bg-transparent transition-transform duration-300 ease-in-out hover:translate-x-5 hover:opacity-70" id="about">ABOUT</li>
          <li onClick={() => scrollToSection(experienceRef)} className="font-GeneralSans font-extrabold px-6 cursor-pointer bg-transparent transition-transform duration-300 ease-in-out hover:translate-x-5 hover:opacity-70" id="experience">EXPERIENCE</li>
          <li onClick={() => scrollToSection(projectsRef)} className="font-GeneralSans font-extrabold px-6 cursor-pointer bg-transparent transition-transform duration-300 ease-in-out hover:translate-x-5 hover:opacity-70" id="projects">PROJECTS</li>
          <li onClick={() => scrollToSection(socialsRef)} className="font-GeneralSans font-extrabold px-6 cursor-pointer bg-transparent transition-transform duration-300 ease-in-out hover:translate-x-5 hover:opacity-70" id="socials">SOCIALS</li>
        </ul>
        <div className="absolute bg-[#78716B] opacity-50 rounded-full xl:h-[30rem] xl:w-[30rem] h-[23rem] w-[23rem] -bottom-8 -right-24"></div>
        <div className="absolute bg-[#B9B3A9] opacity-75 rounded-full xl:h-[32rem] xl:w-[32rem] h-[25em] w-[25rem] -bottom-32 -right-10"></div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={toggleSidebar}></div>
      )}

    </div>
  )
}

export default Navbar
