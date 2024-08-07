import React from 'react'
import PropTypes from 'prop-types'

function Project({ number, imageSrc, subject, title}) {
  return (
    <div className="bg-transparent flex mb-12">
        <h1 className="bg-transparent font-semibold text-[400px] text-[#F2F0E9]">{number}.</h1>
        <div className="bg-transparent">
          <img src={imageSrc} className="h-[1100px] w-[956px] rounded-2xl"/>
          <p className="bg-transparent text-[#F2F0E9] text-2xl mt-4">{subject}</p>
          <p className="bg-transparent text-[#F2F0E9] font-bold text-4xl mt-2">{title}</p>
        </div>
    </div>
  );
}

Project.propTypes = {
  number: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Project
