import React, { useRef } from 'react';

function Navbar() {
  const about = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const socials = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <nav className="flex justify-between items-center px-28 pt-8">
        <a className="font-GeneralSans font-bold text-4xl text-[#78716B] cursor-pointer" href="/">AMOK*</a>
        <ul className="flex text-2xl text-[#78716B]">
          <li onClick={() => scrollToSection(about)} className="px-6 cursor-pointer">about</li>
          <li onClick={() => scrollToSection(experience)} className="px-6 cursor-pointer">experience</li>
          <li onClick={() => scrollToSection(projects)} className="px-6 cursor-pointer">projects</li>
          <li onClick={() => scrollToSection(socials)} className="px-6 cursor-pointer">socials</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
