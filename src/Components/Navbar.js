import React from 'react'

function Navbar() {
  return (
    <div>
      <nav class="flex justify-between items-center px-28 pt-8">
        <a class="font-GeneralSans font-bold text-4xl text-[#78716B] cursor-pointer" href="/">AMOK*</a>
        <ul class="flex text-2xl text-[#78716B]">
          <li class="px-6 cursor-pointer">about</li>
          <li class="px-6 cursor-pointer">experience</li>
          <li class="px-6 cursor-pointer">projects</li>
          <li class="px-6 cursor-pointer">socials</li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Navbar
