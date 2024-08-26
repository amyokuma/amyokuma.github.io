import React, { useRef } from 'react';

function Navbar({ aboutRef, experienceRef, projectsRef, socialsRef }) {

  const scrollToSection = (elementRef) => {
    if (elementRef && elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.error("Invalid ref passed to scrollToSection:", elementRef);
    }
  };

  return (
    <div>
      <nav className="flex justify-between items-center px-28 pt-8">
        <a className="font-GeneralSans font-bold text-4xl text-[#78716B] cursor-pointer" href="/">AMOK*</a>
        <ul className="flex text-2xl text-[#78716B]">
          <li onClick={() => scrollToSection(aboutRef)} className="px-6 cursor-pointer">about</li>
          <li onClick={() => scrollToSection(experienceRef)} className="px-6 cursor-pointer">experience</li>
          <li onClick={() => scrollToSection(projectsRef)} className="px-6 cursor-pointer">projects</li>
          <li onClick={() => scrollToSection(socialsRef)} className="px-6 cursor-pointer">socials</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
