import React from 'react';

function Footer() {

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="flex flex-wrap items-center justify-center gap-y-4 gap-x-[clamp(1rem,4vw,8rem)] bg-[#E1DED6] px-[clamp(1.25rem,6vw,6rem)] py-[clamp(1.5rem,3vw,3rem)] pb-[clamp(1rem,2vw,2rem)] text-[#78716B] max-desktop:grid max-desktop:grid-cols-[minmax(0,1fr)_auto] max-desktop:items-end max-desktop:gap-x-5 max-desktop:gap-y-2 max-desktop:px-[clamp(1.25rem,6vw,3rem)] max-desktop:py-[clamp(1.5rem,5vw,2.5rem)] max-desktop:pb-[clamp(1.25rem,4vw,2rem)]">
      <h1 className="bg-transparent pr-6 font-GeneralSans text-[clamp(.9rem,2vw,2.25rem)] font-bold max-desktop:col-start-1 max-desktop:pr-0">© 2026 AMOK*</h1>
      <p className="min-w-0 flex-[1_1_18rem] border-l-2 border-[#78716B] bg-transparent pl-6 text-[clamp(.7rem,1.4vw,1.5rem)] max-desktop:col-start-1 max-desktop:row-start-2 max-desktop:border-l-0 max-desktop:pl-0">Loosely designed in Figma and coded in Visual Studio Code by yours truly.<br className="hidden xl:block"/> Built with React.js and Tailwind CSS, deployed with GitHub Pages.</p>
      <button aria-label="Scroll to top" className="footer-back-to-top ml-auto bg-transparent text-2xl transition-transform duration-300 ease-out hover:-translate-y-1 max-desktop:col-start-2 max-desktop:row-span-2 max-desktop:row-start-1 max-desktop:ml-0" onClick={scrollUp}><i className="text-[#F2F0E9] bg-[#78716b] rounded-full px-4 py-3 lg:px-7 lg:py-6 2xl:px-9 2xl:py-8 fa-solid fa-arrow-up transition-transform duration-300 ease-out hover:scale-105 hover:opacity-80"></i></button>
    </footer>
  )
}

export default Footer
