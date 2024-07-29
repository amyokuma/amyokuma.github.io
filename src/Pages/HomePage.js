import React from 'react'
import Amy from '../assets/amy-img.jpg'
import Project from '../Components/Project'
import Cloud1 from '../assets/clouds1.jpg'
import Cloud2 from '../assets/clouds2.jpg'

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
          <img src={Amy} class="h-auto w-[160rem] rounded-2xl drop-shadow-[20px_20px_0_rgba(255,255,255,1)]" alt="Amy"/>
        </div>
      </div>
      <section id="important" class="bg-[#232323] h-[4082px] rounded-3xl mt-56">
        <div id="experience" class="bg-transparent px-44 py-28">
          <h1 class="font-GeneralSans text-9xl text-[#F2F0E9] font-medium bg-transparent pb-20">MY <span class="font-bold text-[#A6BBDA] bg-transparent">EXPERIENCE*</span></h1>
          <div class="bg-transparent text-[#F2F0E9] flex space-x-44">
            <div class="bg-transparent">
              <h1 class="bg-transparent font-bold text-5xl whitespace-nowrap">Web Development Scholar</h1>
              <p class="bg-transparent text-2xl">Kode with Klossy</p>
              <br></br>
              <p class="bg-transparent text-2xl">June 2022 - July 2022</p>
              <p class="bg-transparent text-2xl">Remote</p>
            </div>
            <div class="bg-transparent">
              <p class="bg-transparent text-2xl">Collaborated with a team of students to create and design a website about 
                sustainability in the fashion industry. Presented our final project to a panel of 
                professionals and were assessed. Expanded my novice web development skills to 
                be applicable to real-life issues.</p>
              <div class="bg-transparent pt-7">
                <button class="bg-transparent text-2xl border-[#F2F0E9] border-[1px] rounded-3xl px-10 py-1 hover:bg-[#F2F0E9] hover:text-[#232323] mr-8">HTML</button>
                <button class="bg-transparent text-2xl border-[#F2F0E9] border-[1px] rounded-3xl px-12 py-1 hover:bg-[#F2F0E9] hover:text-[#232323] mr-8">CSS</button>
                <button class="bg-transparent text-2xl border-[#F2F0E9] border-[1px] rounded-3xl px-5 py-1 hover:bg-[#F2F0E9] hover:text-[#232323] mr-8">JavaScript</button>
              </div>
            </div>
          </div>
          <hr class="my-16"></hr>
          <div class="bg-transparent text-[#F2F0E9] flex space-x-[25.5rem]">
            <div class="bg-transparent">
              <h1 class="bg-transparent font-bold text-5xl whitespace-nowrap">Creative Intern</h1>
              <p class="bg-transparent text-2xl">EGD Collective</p>
              <br></br>
              <p class="bg-transparent text-2xl">June 2021 - August 2021</p>
              <p class="bg-transparent text-2xl">Remote</p>
            </div>
            <div class="bg-transparent">
              <p class="bg-transparent text-2xl">Designed flyers, info-graphics, and the occasional video for their social media 
                pages. Promoted inclusivity within the video game industry and helped educate 
                others about the industry. Worked on and polished the company website using 
                Figma. Created weekly reports to display what I had accomplished for the time 
                that I worked.</p>
              <div class="bg-transparent pt-7">
                <button class="bg-transparent text-2xl border-[#F2F0E9] border-[1px] rounded-3xl px-10 py-1 hover:bg-[#F2F0E9] hover:text-[#232323] mr-8">Figma</button>
                <button class="bg-transparent text-2xl border-[#F2F0E9] border-[1px] rounded-3xl px-5 py-1 hover:bg-[#F2F0E9] hover:text-[#232323] mr-8">Photoshop</button>
                <button class="bg-transparent text-2xl border-[#F2F0E9] border-[1px] rounded-3xl px-9 py-1 hover:bg-[#F2F0E9] hover:text-[#232323] mr-8">Design</button>
              </div>
            </div>
          </div>
          <a href="https://drive.google.com/file/d/1Q1hZHuSkplTeOVP5Ymqglfj0gMPRAX30/view?usp=sharing" target="blank" class="bg-transparent flex justify-end mt-8">
            <button class="bg-transparent text-[#F2F0E9] font-GeneralSans font-semibold text-4xl py-12">view full resume here →</button>
          </a>
        </div>
        <div id="projects" class="bg-transparent px-44 pb-28">
          <h1 class="font-GeneralSans text-9xl text-[#F2F0E9] font-medium bg-transparent pb-20">SELECTED <span class="font-bold text-[#A6BBDA] bg-transparent">WORKS*</span></h1>
          <Project number="01" imageSrc={Cloud1} subject="Social Awareness" title="Ecostyle"/>
          <Project number="02" imageSrc={Cloud2} subject="Music & Entertainment" title="Resonate"/>
          <a href="https://drive.google.com/file/d/1Q1hZHuSkplTeOVP5Ymqglfj0gMPRAX30/view?usp=sharing" target="blank" class="bg-transparent flex justify-end mt-8">
            <button class="bg-transparent text-[#F2F0E9] font-GeneralSans font-semibold text-4xl py-12">view full project archive →</button>
          </a>
        </div>
      </section>
      <div id="contact">
        <h1 class="font-GeneralSans text-9xl font-medium text-center text-[#78716B] pt-32">LET'S <span class="font-bold text-[#A6BBDA]">KEEP IN TOUCH*</span></h1>
      </div>
    </section>
  )
}

export default HomePage
