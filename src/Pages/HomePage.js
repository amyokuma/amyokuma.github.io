import React from 'react'
import Amy from '../assets/amy-img.jpg'

function HomePage() {
  return (
    <section>
      <div id="landing" class="flex space-x-7 justify-center items-end pt-24">
        <div class="bg-[#B9B3A9] opacity-45 rounded-3xl h-[587px] w-[605px]"></div>
        <div>
          <p class="text-base text-right text-[#78716B]">37.3387° N, 121.8853° W<br></br>SAN JOSE, CALIFORNIA</p>
        </div>
        <div>
          <h1 class="text-right text-[180px]/[180px] font-GeneralSans font-semibold text-[#7089AF]">AMY<br></br><span class="text-[#556B8B]">OKUMA</span></h1>
          <p class="text-[32px] text-right font-medium text-[#78716B]">An aspiring front-end developer and UI/UX designer.</p>
          <p class="text-base text-right text-[#78716B] pt-32">(scroll for more ↓)</p>
        </div>
      </div>
      <div id="about-me" class="flex px-44 mt-56 space-x-56">
        <div class="text-left">
          <h1 class="font-GeneralSans text-[64px] text-[#78716B]">A LITTLE BIT</h1>
          <h1 class="font-GeneralSans font-bold text-9xl text-[#7089AF]">ABOUT ME*</h1>
          <p class="text-[32px] text-[#78716B]">A current student at San Jose State University majoring in 
            Computer Science. With a passion for design and 
            development, I always strive to improve my skills and 
            expand my capabilities. A few hobbies of mine include 
            playing video games, watching kdramas, and listening to 
            music !</p>
        </div>
        <div>
          <img src={Amy} class="h-auto w-[160rem] rounded-2xl"/>
        </div>
      </div>
      <section id="important" class="bg-[#232323] h-[2382px] rounded-3xl mt-56">
        <div id="experience">
          <h1 class="font-GeneralSans text-9xl text-[#F2F0E9] font-medium">MY <span class="font-bold text-[#A6BBDA] ">EXPERIENCE*</span></h1>
        </div>
      </section>
    </section>
  )
}

export default HomePage
