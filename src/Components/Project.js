import React from 'react'
import PropTypes from 'prop-types'

function Project({ number, imageSrc, subject, title}) {
  return (
    <div class="bg-[#232323] flex space-x-[25rem]">
        <h1 class="bg-transparent font-GeneralSans font-semibold text-[300px] text-[#F2F0E9]">{number}.</h1>
        <div class="bg-transparent">
          <img src={imageSrc} class="h-[1114px] w-[856px] rounded-2xl"/>
          <p class="bg-transparent text-[#F2F0E9] text-2xl mt-4">{subject}</p>
          <p class="bg-transparent text-[#F2F0E9] font-bold text-4xl mt-2">{title}</p>
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
