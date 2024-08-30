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
      <h1 className="pr-6 font-GeneralSans font-bold text-4xl bg-transparent">© 2024 AMOK*</h1>
      <p className="border-l-2 border-[#78716B] pl-6 text-2xl bg-transparent">Loosely designed in Figma and coded in Visual Studio Code by yours truly.<br/> Built with React.js and Tailwind CSS, deployed with GitHub Pages.</p>
      {/* <button className="ml-96 text-4xl" onClick={scrollUp}><i class="text-[#F2F0E9] bg-[#78716b] rounded-full px-9 py-8 fa-solid fa-arrow-up transition-transform duration-100 ease-in-out hover:scale-90 hover:opacity-70"></i></button> */}
    </div>
  )
}

export default Footer