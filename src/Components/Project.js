import React from 'react'
import PropTypes from 'prop-types'

function Project({ number, imageSrc, subject, title, videoSrc}) {
  return (
    <div className="bg-transparent flex mb-12 gap-72">
        <h1 className="bg-transparent font-semibold text-[400px] text-[#F2F0E9] w-[400px] ml-[-1rem]">{number}.</h1>
        <div className="bg-transparent relative">
          <video src={videoSrc} className="absolute h-auto w-[800px] rounded-xl top-[270px] left-[40px]" autoPlay muted loop />
          <img src={imageSrc} className="h-[1100px] w-[956px] rounded-2xl"/>
          <p className="bg-transparent text-[#F2F0E9] font-thin text-xl mt-4 font leading-4">{subject}</p>
          <p className="bg-transparent text-[#F2F0E9] font-bold text-5xl mt-2">{title}</p>
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
