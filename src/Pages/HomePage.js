import React from 'react'

function HomePage() {
  return (
    <div class="flex space-x-7 justify-center items-end pt-24">
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
  )
}

export default HomePage
