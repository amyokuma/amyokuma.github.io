import React from 'react'
import PropTypes from 'prop-types'

function Project({ number, imageSrc, subject, title, videoSrc}) {
  return (
    <div className="bg-transparent flex mb-12 gap-72">
        <h1 className="hidden xl:block bg-transparent font-semibold text-[400px] text-[#F2F0E9] w-[400px] ml-[-1rem]">{number}.</h1>
        <div className="bg-transparent relative">
          <video src={videoSrc} className="absolute h-auto w-[330px] top-[4rem] left-[20px] xl:w-[800px] rounded-xl xl:top-[15rem] xl:left-[40px]" autoPlay muted loop />
          <img src={imageSrc} className="h-[370px] w-[370px] xl:h-[1100px] xl:w-[956px] rounded-2xl"/>
          <p className="bg-transparent text-[#F2F0E9] font-thin text-[12px] xl:text-xl mt-2 xl:mt-4 font leading-4">{subject}</p>
          <p className="bg-transparent text-[#F2F0E9] font-bold text-[20px] xl:text-5xl mt-0 xl:mt-2">{title}</p>
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
