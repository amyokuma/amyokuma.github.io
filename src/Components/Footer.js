import React from 'react'

function Footer() {
  return (
    <div className="text-[#78716B] flex items-center justify-center p-11"
    style={{ backgroundColor: 'rgba(205, 201, 192, 0.45)' }}>
      <h1 className="pr-6 font-GeneralSans font-bold text-4xl bg-transparent">© 2024 AMOK*</h1>
      <p className="border-l-2 border-[#78716B] pl-6 text-2xl bg-transparent">Loosely designed in Figma and coded in Visual Studio Code by yours truly.<br/> Built with React.js and Tailwind CSS, deployed with GitHub Pages.</p>
      <button className="ml-96 text-4xl"><i class="text-[#F2F0E9] bg-[#78716b] rounded-full px-9 py-8 fa-solid fa-arrow-up"></i></button>
    </div>
  )
}

export default Footer