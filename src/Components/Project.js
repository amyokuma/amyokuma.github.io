import React from 'react'
import PropTypes from 'prop-types'

function Project({ number, imageSrc, subject, title, videoSrc}) {
  return (
    <div className="bg-transparent flex mb-12 lg:gap-32 xl:gap-72">
        <h1 className="hidden lg:block bg-transparent font-semibold lg:text-[200px] xl:text-[300px] 2xl:text-[400px] text-[#F2F0E9] xl:w-[200px] 2xl:w-[400px] ml-[-1rem]">{number}.</h1>
        <div className="bg-transparent relative">
          <video src={videoSrc} className="absolute h-auto w-[290px] left-[15px] min-[425px]:w-[330px] top-[4rem] min-[425px]:left-[20px] lg:w-[432px] xl:w-[630px] 2xl:w-[800px] rounded-xl lg:top-[10rem] 2xl:top-[15rem] xl:left-[40px]" autoPlay muted loop />
          <img src={imageSrc} className="h-[370px] w-[370px] lg:h-[700px] xl:h-[800px] 2xl:h-[1100px] lg:w-[600px] xl:w-[956px] rounded-2xl"/>
          <p className="bg-transparent text-[#F2F0E9] font-thin text-[12px] lg:text-[13px] xl:text-[18px] 2xl:text-xl mt-2 xl:mt-4 font leading-4">{subject}</p>
          <p className="bg-transparent text-[#F2F0E9] font-bold text-[20px] lg:text-[18px] xl:text-4xl 2xl:text-5xl mt-0 xl:mt-2">{title}</p>
        </div>
    </div>
  );
}

Project.propTypes = {
  number: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  videoSrc: PropTypes.string.isRequired
}

export default Project
