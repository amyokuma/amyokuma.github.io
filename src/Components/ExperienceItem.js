import React from 'react';

function ExperienceItem({ title, organization, location, dates, description, skills, layoutClass, skillClasses }) {
  return (
    <article className={`experience-row grid min-w-0 grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)] items-start gap-[clamp(1.5rem,6vw,8rem)] bg-transparent text-[#F2F0E9] max-[1023px]:grid-cols-1 max-[1023px]:gap-4 ${layoutClass === 'experience-item--second' ? 'gap-[clamp(1.5rem,10vw,13rem)]' : ''}`}>
      <div className="min-w-0 bg-transparent">
        <h2 className="bg-transparent text-[clamp(1.35rem,3vw,3rem)] font-bold leading-[1.05]">
          {title}
        </h2>
        <p className="bg-transparent mt-2 text-[clamp(.75rem,1.5vw,1.5rem)] leading-[1.25] 2xl:mt-0">
          {organization}
        </p>
        <br className="hidden lg:block" />
        <p className="bg-transparent text-[clamp(.75rem,1.5vw,1.5rem)] leading-[1.25]">
          {dates}
        </p>
        <p className="bg-transparent text-[clamp(.75rem,1.5vw,1.5rem)] leading-[1.25]">
          {location}
        </p>
      </div>
      <div className="min-w-0 bg-transparent">
        <p className="mt-4 bg-transparent text-[clamp(.75rem,1.5vw,1.5rem)] leading-[1.25] xl:mt-0 2xl:mt-0">
          {description}
        </p>
          <div className="experience-skills bg-transparent pt-7">
          {skills.map((skill, index) => (
            <span
              className={`inline-block rounded-3xl border border-[#F2F0E9] bg-transparent py-1 text-[clamp(.75rem,1.5vw,1.5rem)] leading-[1.25] mr-[clamp(.35rem,1vw,1.5rem)] mb-2 px-[clamp(.75rem,1.5vw,2.5rem)] hover:bg-[#F2F0E9] hover:text-[#232323] ${skillClasses[index]}`}
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ExperienceItem;
