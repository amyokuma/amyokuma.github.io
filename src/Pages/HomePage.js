import React, { useRef } from 'react'
import { gsap } from 'gsap'
import{ useGSAP } from '@gsap/react'
import Amy from '../assets/amy-img.jpg'
import Project from '../Components/Project'
import Cloud1 from '../assets/clouds1.jpg'
import Cloud2 from '../assets/clouds2.jpg'
import resonate from '../assets/resonate.mp4'
import ecostyle from '../assets/ecostyle.mp4'

function HomePage({ aboutRef, experienceRef, projectsRef, socialsRef }) {
  
  return (
    <section className="overflow-x-hidden overflow-y-hidden">
      <div id="landing" className="relative xl:flex justify-end items-center space-x-[20rem] min-h-screen top-48 xl:top-0">
        <div className="relative z-10 bg-transparent">
          <h1 id="name" className="text-center xl:text-left text-[50px]/[50px] xl:text-[300px]/[260px] font-GeneralSans font-bold text-[#7089AF] xl:tracking-[3rem] bg-transparent">
            AMY
            <br className="hidden xl:block" />
            <span className="text-[#556B8B] tracking-normal bg-transparent"> OKUMA</span>
          </h1>
          <p className="relative text-[16px] text-center xl:text-[45px] xl:text-right font-medium text-[#78716B] bg-transparent whitespace-pre">
            An aspiring <br className="hidden xl:block" />front-end developer <br className="hidden xl:block" />and UI/UX designer.
          </p>
          <p className="pt-6 pl-8 xl:pl-0 text-[10px] xl:text-base text-left text-[#78716B] bg-transparent">(scroll for more ↓)</p>
        </div>
        <div className="relative z-10 bg-transparent -left-8 xl:left-0">
          <p className="text-[10px] xl:text-2xl text-center text-[#78716B] xl:rotate-90 :mr-12 bg-transparent -left-4">
            37.3387° N, 121.8853° W
            <br />
            SAN JOSE, CALIFORNIA
          </p>
        </div>
        <div className="absolute bg-[#CFCABF] opacity-60 rounded-full h-[34rem] w-[34rem] -left-[24rem] -top-[36rem] z-0 xl:hidden"></div>
        <div className="absolute bg-[#CFCABF] opacity-50 rounded-full h-[34rem] w-[34rem] -left-[24rem] -top-[32rem] z-0 xl:hidden"></div>
        <div className="hidden absolute bg-[#CFCABF] opacity-50 rounded-full h-[35rem] w-[35rem] left-[45rem] bottom-[16rem] z-0 xl:block"></div>
        <div className="hidden absolute bg-[#CFCABF] opacity-50 rounded-full h-[20rem] w-[20rem] -left-[17rem] bottom-[12rem] z-0 xl:block"></div>
        <div className="hidden absolute bg-[#78716B] opacity-50 rounded-full h-[35rem] w-[35rem] left-[40rem] bottom-52 z-0 xl:block"></div>
      </div>
      <div id="about-me" ref={aboutRef} className="flex flex-col items-center xl:flex-row xl:px-44 mt-[12rem] xl:mt-[11rem] xl:space-x-56">
        <div className="flex justify-center">
          <img src={Amy} className="h-auto w-[20rem] xl:w-[160rem] rounded-2xl drop-shadow-[20px_20px_0_rgba(255,255,255,1)]" alt="Amy"/>
        </div>
        <div className="text-center xl:text-left mt-8 xl:mt-0">
          <h1 className="font-GeneralSans text-[24px]/[8px] xl:text-[64px]/[70px] text-[#78716B] z-[200] mt-9 xl:mt-0 top-64">A LITTLE BIT</h1>
          <h1 className="font-GeneralSans font-bold text-[40px] xl:text-9xl text-[#7089AF] z-[200] top-64">ABOUT ME*</h1>
          <p className="text-[16px] xl:text-[32px] text-[#78716B] text-left z-[200] top-64 px-10 xl:p-0">A current student at San Jose State University majoring in 
            Computer Science. With a passion for design and 
            development, I always strive to improve my skills and 
            expand my capabilities. A few hobbies of mine include 
            playing video games, watching kdramas, and listening to 
            music !</p>
        </div>
      </div>
      <section id="important" className="bg-grainy h-[2000px] xl:h-[4000px] rounded-3xl mt-56">
        <div id="experience" ref={experienceRef} className="bg-transparent px-11 py-16 xl:px-44 xl:py-28">
          <h1 className="font-GeneralSans text-[38px] xl:text-9xl text-[#F2F0E9] font-medium bg-transparent pb-6 xl:pb-20">MY <span className="font-bold text-[#A6BBDA] bg-transparent">EXPERIENCE*</span></h1>
          <div className="bg-transparent text-[#F2F0E9] xl:flex xl:space-x-44">
            <div className="bg-transparent">
              <h1 className="bg-transparent font-bold text-2xl xl:text-5xl whitespace-nowrap">Web Development Scholar</h1>
              <p className="bg-transparent text-xs xl:text-2xl mt-2 xl:mt-0">Kode with Klossy</p>
              <br className="hidden xl:block"/>
              <p className="bg-transparent text-xs xl:text-2xl">June 2022 - July 2022</p>
              <p className="hidden bg-transparent text-xs xl:text-2xl xl:block">Remote</p>
            </div>
            <div className="bg-transparent">
              <p className="bg-transparent text-xs xl:text-2xl mt-4 xl:mt-0">Collaborated with a team of students to create and design a website about 
                sustainability in the fashion industry. Presented our final project to a panel of 
                professionals and were assessed. Expanded my novice web development skills to 
                be applicable to real-life issues.</p>
              <div className="bg-transparent pt-7">
                <button className="bg-transparent text-xs xl:text-2xl border-[#F2F0E9] border-[1px] rounded-3xl px-7 xl:px-10 py-1 hover:bg-[#F2F0E9] hover:text-[#232323] mr-3 xl:mr-8">HTML</button>
                <button className="bg-transparent text-xs xl:text-2xl border-[#F2F0E9] border-[1px] rounded-3xl px-8 xl:px-12 py-1 hover:bg-[#F2F0E9] hover:text-[#232323] mr-3 xl:mr-8">CSS</button>
                <button className="bg-transparent text-xs xl:text-2xl border-[#F2F0E9] border-[1px] rounded-3xl px-4 xl:px-5 py-1 hover:bg-[#F2F0E9] hover:text-[#232323] xl:mr-8">JavaScript</button>
              </div>
            </div>
          </div>
          <hr className="my-10 xl:my-16"></hr>
          <div className="bg-transparent text-[#F2F0E9] xl:flex xl:space-x-[25.5rem]">
            <div className="bg-transparent">
              <h1 className="bg-transparent font-bold text-2xl xl:text-5xl whitespace-nowrap">Creative Intern</h1>
              <p className="bg-transparent text-xs xl:text-2xl mt-2 xl:mt-0">EGD Collective</p>
              <br className="hidden xl:block"/>
              <p className="bg-transparent text-xs xl:text-2xl">June 2021 - August 2021</p>
              <p className="hidden bg-transparent text-xs xl:text-2xl xl:block">Remote</p>
            </div>
            <div className="bg-transparent">
              <p className="bg-transparent text-xs xl:text-2xl mt-4 xl:mt-0">Designed flyers, info-graphics, and the occasional video for their social media 
                pages. Promoted inclusivity within the video game industry and helped educate 
                others about the industry. Worked on and polished the company website using 
                Figma. Created weekly reports to display what I had accomplished for the time 
                that I worked.</p>
              <div className="bg-transparent pt-7">
                <button className="bg-transparent text-xs xl:text-2xl border-[#F2F0E9] border-[1px] rounded-3xl px-7 xl:px-10 py-1 hover:bg-[#F2F0E9] hover:text-[#232323] mr-3 xl:mr-8">Figma</button>
                <button className="bg-transparent text-xs xl:text-2xl border-[#F2F0E9] border-[1px] rounded-3xl px-4 xl:px-5 py-1 hover:bg-[#F2F0E9] hover:text-[#232323] mr-3 xl:mr-8">Photoshop</button>
                <button className="bg-transparent text-xs xl:text-2xl border-[#F2F0E9] border-[1px] rounded-3xl px-7 xl:px-9 py-1 hover:bg-[#F2F0E9] hover:text-[#232323] mr-3 xl:mr-8">Design</button>
              </div>
            </div>
          </div>
          <a href="https://drive.google.com/file/d/1Q1hZHuSkplTeOVP5Ymqglfj0gMPRAX30/view?usp=sharing" target="blank" className="bg-transparent flex justify-end mt-8">
            <button className="bg-transparent text-[#F2F0E9] font-GeneralSans font-semibold text-[18px] xl:text-4xl py-5 xl:py-12 transition-transform duration-300 ease-in-out hover:translate-x-5">view full resume here →</button>
          </a>
        </div>
        <div id="projects" ref={projectsRef} className="bg-transparent px-7 py-16 xl:px-44 xl:py-28">
          <h1 className="font-GeneralSans text-[38px] xl:text-9xl text-[#F2F0E9] font-medium bg-transparent pb-6 xl:pb-20">SELECTED <span className="font-bold text-[#A6BBDA] bg-transparent">WORKS*</span></h1>
          <Project number="01" imageSrc={Cloud1} videoSrc={ecostyle} subject="Social Awareness" title="Ecostyle"/>
          <Project number="02" imageSrc={Cloud2} videoSrc={resonate} subject="Music & Entertainment" title="Resonate"/>
          <a href="https://drive.google.com/file/d/1Q1hZHuSkplTeOVP5Ymqglfj0gMPRAX30/view?usp=sharing" target="blank" className="bg-transparent flex justify-end mt-7">
          </a>
        </div>
      </section>
      <div id="socials" ref={socialsRef} className='relative'>
      <svg className="absolute bg-transparent xl:top-[-480px] top-[0.1rem] w-[35rem] xl:w-[159rem] h-auto opacity-45 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="100 100 410 199"> <path className="z-50" fill="#CDC9C0" d="M419.72,299.15H89.72v-67.22c113.7-54.89,223.7-54.71,330,0v67.22Z" /></svg>
        <div className="bg-transparent relative z-10">
          <h1 className="font-GeneralSans text-[32px] xl:text-9xl font-medium text-center text-[#78716B] pt-32 bg-transparent">LET'S <span className="font-bold text-[#7089AF] bg-transparent">KEEP IN TOUCH*</span></h1>
          <div id="icons" className='flex space-x-8 xl:space-x-24 justify-center my-3 xl:my-8 bg-transparent relative z-10 mb-10 xl:mb-36'>
            <a className="bg-transparent" href='mailto:amyokuma@gmail.com' target="blank">
              <svg className="h-auto w-8 xl:w-20 bg-transparent hover:opacity-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path className="bg-transparent" fill="#78716b" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            </a>
            <a className="bg-transparent" href="https://www.linkedin.com/in/amy-okuma-14210b16b/" target="blank">
              <svg className="h-auto w-8 xl:w-20 bg-transparent hover:opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="bg-transparent" fill="#78716b" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </a>
            <a className="bg-transparent" classname href='https://www.instagram.com/amyokuma/' target='blank'>
              <svg className="h-auto w-8 xl:w-20 bg-transparent hover:opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="bg-transparent" fill="#78716b" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
            <a className="bg-transparent" href='https://github.com/amyokuma' target='blank'>
              <svg className="h-auto w-8 xl:w-20 bg-transparent hover:opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path className="bg-transparent" fill="#78716b" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </a>
            <a className="bg-transparent" href='https://open.spotify.com/user/amy._.okuma?si=5b317565d14d40e9' target='blank'>
              <svg className="h-auto w-8 xl:w-20 bg-transparent hover:opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path className="bg-transparent" fill="#78716b" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
