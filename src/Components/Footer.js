import React, {useEffect, useState} from 'react'

function Footer() {

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div className="text-[#78716B] flex items-center justify-center p-11"
    style={{ backgroundColor: 'rgba(205, 201, 192, 0.45)' }}>
      <h1 className="pr-6 font-GeneralSans font-bold text-[14px] xl:text-4xl bg-transparent">© 2024 AMOK*</h1>
      <p className="border-l-2 border-[#78716B] pl-6 text-[10px] xl:text-2xl bg-transparent">Loosely designed in Figma and coded in Visual Studio Code by yours truly.<br className="hidden xl:block"/> Built with React.js and Tailwind CSS, deployed with GitHub Pages.</p>
      <button className="xl:ml-96 text-2xl xl:text-4xl" onClick={scrollUp}><i class="text-[#F2F0E9] bg-[#78716b] rounded-full px-5 py-4 xl:px-9 xl:py-8 fa-solid fa-arrow-up transition-transform duration-100 ease-in-out hover:scale-90 hover:opacity-70"></i></button>
    </div>
  )
}

export default Footer