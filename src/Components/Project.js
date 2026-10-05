import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

function Project({ number, imageSrc, subject, title, description, videoSrc, projectLink }) {
  const cursorIndicatorRef = useRef(null);
  const [isProjectHovered, setProjectHovered] = useState(false);

  const copySpacingClass = number === '01'
    ? 'max-[1023px]:mt-[clamp(1rem,4vw,2rem)]'
    : 'max-[1023px]:mt-[clamp(2rem,6vw,3rem)]';

  const handleProjectMouseMove = (event) => {
    if (!cursorIndicatorRef.current) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    cursorIndicatorRef.current.style.left = `${x}px`;
    cursorIndicatorRef.current.style.top = `${y}px`;
  };

  return (
    <article className="project-card mb-0 grid grid-cols-[auto_minmax(0,1fr)] gap-[clamp(1rem,5vw,8rem)] bg-transparent max-[1023px]:mb-[clamp(2rem,8vw,5rem)] max-[1023px]:grid-cols-1 desktop:mb-0">
        <h2 className="project-number w-[clamp(5rem,15vw,25rem)] bg-transparent text-[clamp(7rem,20vw,25rem)] font-semibold leading-[.8] text-[#F2F0E9] opacity-0 max-[1023px]:hidden">{number}.</h2>
        <div className="relative min-w-0 w-full bg-transparent desktop:max-w-[52rem] desktop:translate-x-[clamp(2rem,5vw,5rem)] desktop:justify-self-center">
          {projectLink ? (
            <a
              href={projectLink}
              target="_blank"
              rel="noreferrer"
              className="project-media-link relative block cursor-pointer rounded-2xl bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A6BBDA]"
              aria-label={`View ${title} project`}
              onMouseEnter={() => setProjectHovered(true)}
              onMouseMove={handleProjectMouseMove}
              onMouseLeave={() => setProjectHovered(false)}
            >
              <span
                ref={cursorIndicatorRef}
                className={`project-cursor-indicator pointer-events-none absolute z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#A6BBDA] font-GeneralSans text-4xl text-[#F2F0E9] transition-[opacity,transform] duration-300 ease-out max-tablet:h-16 max-tablet:w-16 max-tablet:text-3xl ${isProjectHovered ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                aria-hidden="true"
              >
                ↗
              </span>
              {videoSrc && (
                <video
                  src={videoSrc}
                  poster={imageSrc}
                  className="project-media absolute left-1/2 top-[16%] z-10 block h-auto w-[82%] -translate-x-1/2 rounded-xl object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              )}
              <img src={imageSrc} className="project-media block aspect-square w-[min(100%,60rem)] rounded-2xl object-cover desktop:aspect-[4/3]" alt="" />
            </a>
          ) : (
            <>
              {videoSrc && (
                <video
                  src={videoSrc}
                  poster={imageSrc}
                  className="project-media absolute left-1/2 top-[16%] z-10 block h-auto w-[82%] -translate-x-1/2 rounded-xl object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={`${title} project preview`}
                />
              )}
              <img src={imageSrc} className="project-media block aspect-square w-[min(100%,60rem)] rounded-2xl object-cover desktop:aspect-[4/3]" alt={`${title} project artwork`} />
            </>
          )}
          <div className={`project-copy bg-transparent ${copySpacingClass} desktop:mt-0`}>
            <p className="mt-2 bg-transparent text-[clamp(.75rem,1.4vw,1.25rem)] font-thin leading-4 text-[#F2F0E9] xl:mt-4">{subject}</p>
            <p className="mt-0 bg-transparent text-[clamp(1.25rem,3vw,3rem)] font-bold text-[#F2F0E9] xl:mt-1">{title}</p>
            <p className="mt-1 max-w-[48rem] bg-transparent text-[clamp(.8rem,1.3vw,1.25rem)] leading-[1.25] text-[#F2F0E9] desktop:whitespace-nowrap">{description}</p>
          </div>
        </div>
    </article>
  );
}

Project.propTypes = {
  number: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoSrc: PropTypes.string,
  projectLink: PropTypes.string
}

export default Project
