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
    <div>
      <nav className={`flex justify-between items-center pl-7 pr-2 xl:px-28 pt-8 ${isScrolled ? 'hidden' : 'block'}`}>
        <a className="font-GeneralSans font-bold text-3xl xl:text-4xl text-[#78716B] cursor-pointer transition-transform duration-300 ease-in-out hover:translate-x-3" href="/">AMOK*</a>
        <ul className=" xl:flex text-2xl text-[#78716B]">
          <li onClick={() => scrollToSection(aboutRef)} className="xl:px-6 cursor-pointer hover:opacity-60">about</li>
          <li onClick={() => scrollToSection(experienceRef)} className="xl:px-6 cursor-pointer hover:opacity-60">experience</li>
          <li onClick={() => scrollToSection(projectsRef)} className="xl:px-6 cursor-pointer hover:opacity-60">projects</li>
          <li onClick={() => scrollToSection(socialsRef)} className="xl:px-6 cursor-pointer hover:opacity-60">socials</li>
        </ul>
      </nav>

      <button onClick={toggleSidebar} className={`m-5 fixed top-4 right-4 text-4xl z-50 ${isScrolled ? 'block' : 'hidden'} text-[#F6F4EF]`}>
        <i class={`fa-solid ${isSidebarOpen ? 'fa-times' : 'fa-bars'} bg-[#9EACC0] text-5xl rounded-full py-4 px-5 transition-transform duration-100 ease-in-out hover:scale-90`}></i>
        </button>
      <div 
        className={`fixed top-0 right-0 h-full w-[48rem] bg-[#CFCABF] z-40 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg`}
      >
        <ul className="flex flex-col w-full pt-28 pl-6 space-y-10 bg-transparent text-7xl text-[#7089AF]">
          <li onClick={() => scrollToSection(aboutRef)} className="font-GeneralSans font-extrabold px-6 cursor-pointer bg-transparent transition-transform duration-300 ease-in-out hover:translate-x-5 hover:opacity-70" id="about">ABOUT</li>
          <li onClick={() => scrollToSection(experienceRef)} className="font-GeneralSans font-extrabold px-6 cursor-pointer bg-transparent transition-transform duration-300 ease-in-out hover:translate-x-5 hover:opacity-70" id="experience">EXPERIENCE</li>
          <li onClick={() => scrollToSection(projectsRef)} className="font-GeneralSans font-extrabold px-6 cursor-pointer bg-transparent transition-transform duration-300 ease-in-out hover:translate-x-5 hover:opacity-70" id="projects">PROJECTS</li>
          <li onClick={() => scrollToSection(socialsRef)} className="font-GeneralSans font-extrabold px-6 cursor-pointer bg-transparent transition-transform duration-300 ease-in-out hover:translate-x-5 hover:opacity-70" id="socials">SOCIALS</li>
        </ul>
        <div className="absolute bg-[#78716B] opacity-50 rounded-full h-[30rem] w-[30rem] -bottom-8 -right-24"></div>
        <div className="absolute bg-[#B9B3A9] opacity-75 rounded-full h-[32rem] w-[32rem] -bottom-32 -right-10"></div>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={toggleSidebar}></div>
      )}

    </div>
  )
}

export default Navbar
