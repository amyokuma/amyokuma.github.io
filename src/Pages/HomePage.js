import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Amy from '../assets/amy-img.jpg';
import ExperienceItem from '../Components/ExperienceItem';
import Project from '../Components/Project';
import { experiences, projects } from '../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

function HomePage({ isLoading, onHeroRevealComplete, aboutRef, experienceRef, projectsRef, socialsRef }) {
  const pageRef = useRef(null);
  const projectsCarouselRef = useRef(null);

  useGSAP(() => {
    if (isLoading) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      const socials = pageRef.current?.querySelector('#socials');
      if (socials) {
        gsap.set([socials.querySelector('h1'), ...socials.querySelectorAll('#icons a')], { clearProps: 'all', autoAlpha: 1 });
      }
      onHeroRevealComplete?.();
      return undefined;
    }

    const media = gsap.matchMedia();

    media.add('(min-width: 0px)', () => {
      const page = pageRef.current;
      const hero = page?.querySelector('#landing');
      const about = page?.querySelector('#about-me');
      const experience = page?.querySelector('#experience');
      const socials = page?.querySelector('#socials');

      if (!page || !hero || !about || !experience || !socials) return undefined;

      const compactMotion = window.matchMedia('(max-width: 767px)').matches;
      const heroTitle = hero.querySelector('.landing-title');
      const heroDescription = hero.querySelector('.landing-description');
      const heroLocation = hero.querySelector('.landing-location');
      const heroScrollPrompt = hero.querySelector('.landing-scroll-prompt');
      const heroOrbs = hero.querySelectorAll('.hero-orb');

      if (compactMotion) {
        // Mobile keeps the original CSS-only composition. The callback only
        // releases the loader scroll lock; it does not style hero elements.
        onHeroRevealComplete?.();
      } else {
        const heroEntrance = gsap.timeline({
          defaults: { ease: 'power3.out' },
          onComplete: onHeroRevealComplete,
        });
        heroEntrance
          .from(heroTitle, { y: 24, autoAlpha: 0, duration: 1.05 })
          .from(heroDescription, { y: 14, autoAlpha: 0, duration: 0.75 }, '-=0.55')
          .from([heroLocation, heroScrollPrompt], { y: 10, autoAlpha: 0, duration: 0.65, stagger: 0.1 }, '-=0.3')
          .from(heroOrbs, { scale: 0.96, autoAlpha: 0, duration: 1.05, stagger: 0.1 }, 0);

        gsap.to(heroTitle, {
          y: -80,
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top bottom', end: 'bottom top', scrub: 1.2, invalidateOnRefresh: true },
        });
        gsap.to(heroDescription, {
          y: -36,
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top bottom', end: 'bottom top', scrub: 1, invalidateOnRefresh: true },
        });
        gsap.to(heroOrbs, {
          y: (index) => (index % 2 === 0 ? -90 : -48),
          ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top bottom', end: 'bottom top', scrub: 1.3, invalidateOnRefresh: true },
        });
      }

      const aboutImage = about.querySelector('img');
      const aboutHeadings = about.querySelectorAll('h1');
      const aboutCopy = about.querySelector('p');
      const aboutReveal = gsap.timeline({
        scrollTrigger: {
          trigger: about,
          start: 'top 92%',
          end: 'bottom 18%',
          scrub: compactMotion ? 0.5 : 1,
          invalidateOnRefresh: true,
        },
      });
      aboutReveal
        .fromTo(aboutImage,
          { autoAlpha: 0, clipPath: compactMotion ? 'inset(0 0 65% 0 round 1rem)' : 'inset(0 0 100% 0 round 1rem)' },
          { autoAlpha: 1, clipPath: 'inset(0 0 0% 0 round 1rem)', duration: 1, ease: 'power3.out' },
          0,
        )
        .fromTo(aboutHeadings, { y: compactMotion ? 8 : 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.65, stagger: 0.1, ease: 'power3.out' }, 0.1)
        .fromTo(aboutCopy, { y: compactMotion ? 6 : 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.65, ease: 'power3.out' }, 0.3);
      gsap.to(aboutImage, { y: compactMotion ? -4 : -18, ease: 'none', scrollTrigger: { trigger: about, start: 'top bottom', end: 'bottom top', scrub: compactMotion ? 0.65 : 1.2, invalidateOnRefresh: true } });

      const experienceRows = experience.querySelectorAll('.experience-row');
      const experienceDividers = experience.querySelectorAll('hr');
      const experienceSkills = experience.querySelectorAll('.experience-skills');
      const experienceReveal = gsap.timeline({
        scrollTrigger: {
          trigger: experience,
          start: 'top 94%',
          end: 'bottom 16%',
          scrub: compactMotion ? 0.5 : 1.1,
          invalidateOnRefresh: true,
        },
      });
      experienceReveal
        .fromTo(experienceRows, { y: compactMotion ? 8 : 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.16, ease: 'power3.out' }, 0)
        .fromTo(experienceDividers, { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.7, stagger: 0.12, ease: 'power2.out' }, 0.15)
        .fromTo(experienceSkills, { y: compactMotion ? 5 : 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.14, ease: 'power3.out' }, 0.3);

      return undefined;
    });

    media.add('(min-width: 64rem)', () => {
      const section = projectsCarouselRef.current;
      const cards = gsap.utils.toArray('.project-card', section);
      const numberDisplays = gsap.utils.toArray('.project-number-display', section);

      if (!section || cards.length < 2) return undefined;

      // Give each project a longer pinned interval without changing the card
      // layout. The threshold below prevents small wheel/trackpad movement
      // from immediately advancing to the next project.
      const transitionDistance = (cards.length - 1) * window.innerHeight * 1.1;
      const projectStep = 1 / (cards.length - 1);
      const advanceThreshold = projectStep * 0.58;
      let activeProjectIndex = 0;
      let snapTargetIndex = 0;
      let snapInProgress = false;
      let lastScrollDirection = 1;

      const snapToNextProject = (progress) => {
        if (snapInProgress) {
          return snapTargetIndex * projectStep;
        }

        const direction = progress === activeProjectIndex * projectStep
          ? lastScrollDirection
          : progress > activeProjectIndex * projectStep ? 1 : -1;

        const distanceFromActive = Math.abs(progress - activeProjectIndex * projectStep);
        if (distanceFromActive < advanceThreshold) {
          snapTargetIndex = activeProjectIndex;
          return activeProjectIndex * projectStep;
        }

        snapTargetIndex = gsap.utils.clamp(
          0,
          cards.length - 1,
          activeProjectIndex + direction,
        );
        snapInProgress = true;

        return snapTargetIndex * projectStep;
      };

      gsap.set(cards, { yPercent: 100, scale: 0.98 });
      gsap.set(cards[0], { yPercent: 0, scale: 1 });
      gsap.set(numberDisplays, { autoAlpha: 0 });
      gsap.set(numberDisplays[0], { autoAlpha: 1 });

      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.35,
          snap: {
            snapTo: snapToNextProject,
            delay: 0.18,
            duration: { min: 0.35, max: 0.65 },
            ease: 'power2.out',
            inertia: false,
            onComplete: () => {
              activeProjectIndex = snapTargetIndex;
              snapInProgress = false;
            },
            onInterrupt: () => {
              snapInProgress = false;
            },
          },
          end: `+=${transitionDistance}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (self.direction !== 0) {
              lastScrollDirection = self.direction;
            }

            if (
              snapInProgress
              && Math.abs(self.progress - snapTargetIndex * projectStep) < 0.01
            ) {
              activeProjectIndex = snapTargetIndex;
              snapInProgress = false;
            }
          },
        },
      });

      for (let index = 0; index < cards.length - 1; index += 1) {
        const currentMedia = cards[index].querySelectorAll('.project-media');
        const nextMedia = cards[index + 1].querySelectorAll('.project-media');
        timeline
          .addLabel(`project-${index}`, index)
          .to(cards[index], { yPercent: -100, scale: 0.98, duration: 0.55 }, index)
          .to(cards[index + 1], { yPercent: 0, scale: 1, duration: 0.55 }, index + 0.15)
          .to(currentMedia, { y: -10, duration: 0.55 }, index)
          .fromTo(nextMedia, { y: 14 }, { y: 0, duration: 0.55 }, index + 0.15)
          .to(numberDisplays[index], { autoAlpha: 0, duration: 0.25 }, index)
          .to(numberDisplays[index + 1], { autoAlpha: 1, duration: 0.25 }, index + 0.15);
      }

      timeline.addLabel(`project-${cards.length - 1}`, cards.length - 1);

      return () => timeline.kill();
    });

    ScrollTrigger.refresh();
    return () => media.revert();
  }, { scope: pageRef, dependencies: [projects.length, isLoading, onHeroRevealComplete] });

  useGSAP(() => {
    if (isLoading) return undefined;

    const socials = pageRef.current?.querySelector('#socials');
    const socialsHeading = socials?.querySelector('h1');
    const socialIcons = socials?.querySelectorAll('#icons a');
    const socialsWave = socials?.querySelector('.socials-wave');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!socials || !socialsHeading || !socialIcons || !socialsWave) return undefined;

    const media = gsap.matchMedia();

    media.add('(max-width: 63.99rem)', () => {
      // Mobile and tablet socials stay completely static and visible. This also clears
      // desktop inline styles when resizing down across the breakpoint.
      gsap.set([socialsHeading, ...socialIcons], { clearProps: 'all', autoAlpha: 1 });
      gsap.set(socialsWave, { clearProps: 'transform' });
      return undefined;
    });

    media.add('(min-width: 64rem)', () => {
      if (reduceMotion) {
        gsap.set([socialsHeading, ...socialIcons], { clearProps: 'all', autoAlpha: 1 });
        gsap.set(socialsWave, { clearProps: 'transform' });
        return undefined;
      }

      gsap.set(socialsHeading, { y: 180, autoAlpha: 0 });
      gsap.set(socialIcons, { y: 128, autoAlpha: 0 });

      const socialsReveal = gsap.timeline({
        scrollTrigger: {
          trigger: socials,
          start: 'top 60%',
          end: 'top 15%',
          scrub: 1.3,
          invalidateOnRefresh: true,
        },
      });
      socialsReveal
        .to(socialsHeading, { y: 0, autoAlpha: 1, duration: 1.8, ease: 'power3.out' }, 0)
        .to(socialIcons, { y: 0, autoAlpha: 1, duration: 1.4, stagger: 0.12, ease: 'power3.out' }, 0.35);
      gsap.to(socialsWave, {
        y: -36,
        ease: 'none',
        scrollTrigger: { trigger: socials, start: 'top 60%', end: 'top 15%', scrub: 1.5, invalidateOnRefresh: true },
      });
      ScrollTrigger.refresh();
      return undefined;
    });

    return () => media.revert();
  }, { scope: pageRef, dependencies: [isLoading] });

  return (
    <section ref={pageRef} className={isLoading ? 'pointer-events-none opacity-0' : ''}>
      <div id="landing" className="landing relative isolate">
        <div className="landing-copy relative z-10 bg-transparent">
          <h1 id="name" className="landing-title font-GeneralSans font-bold text-[#7089AF] bg-transparent">
            <span className="landing-title-first">AMY</span>
            <br className="hidden lg:block" />
            <span className="text-[#556B8B] tracking-normal bg-transparent"> OKUMA</span>
          </h1>
          <p className="landing-description relative text-center lg:text-right font-medium text-[#78716B] bg-transparent">
            An aspiring <br className="hidden lg:block" />product manager <br className="hidden lg:block" />and designer.
          </p>
          <p className="landing-scroll-prompt pt-6 pl-8 lg:pl-0 text-[10px] lg:text-base text-left text-[#78716B] bg-transparent">(scroll for more ↓)</p>
        </div>
        <div className="landing-location relative z-10 bg-transparent">
          <p className="text-[10px] lg:text-xl xl:text-2xl text-center text-[#78716B] bg-transparent">
            37.3387° N, 121.8853° W
            <br />
            SAN JOSE, CALIFORNIA
          </p>
        </div>
        <div className="hero-orb hero-orb--mobile hero-orb--mobile-one"></div>
        <div className="hero-orb hero-orb--mobile hero-orb--mobile-two"></div>
        <div className="hero-orb hero-orb--desktop hero-orb--desktop-one"></div>
        <div className="hero-orb hero-orb--desktop hero-orb--desktop-two"></div>
        <div className="hero-orb hero-orb--desktop hero-orb--desktop-three"></div>
      </div>
      <div id="about-me" ref={aboutRef} className="mt-0 grid items-center gap-[clamp(1rem,4vw,3rem)] px-[clamp(1.25rem,7vw,11rem)] desktop:mt-[clamp(3rem,9vw,11rem)] desktop:grid-cols-[minmax(18rem,.85fr)_minmax(0,1.15fr)] desktop:gap-[clamp(2rem,7vw,10rem)]">
        <div className="flex justify-center">
          <img src={Amy} className="h-auto w-[min(100%,clamp(18rem,42vw,36rem))] rounded-2xl drop-shadow-[20px_20px_0_rgba(255,255,255,1)] desktop:w-[min(100%,36rem)]" alt="Amy"/>
        </div>
        <div className="min-w-0 mt-[clamp(.5rem,2vw,1rem)] text-center desktop:mt-0 desktop:text-left">
          <h1 className="z-[200] font-GeneralSans text-[clamp(1.5rem,4vw,4rem)] leading-[.9] text-[#78716B]">A LITTLE BIT</h1>
          <h1 className="z-[200] font-GeneralSans text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[.95] text-[#7089AF]">ABOUT ME*</h1>
          <p className="mt-[clamp(1rem,2vw,2rem)] z-[200] text-left text-[clamp(1rem,2.5vw,2rem)] leading-[1.2] text-[#78716B]">A current student at San Jose State University majoring in
            Computer Science and minoring in interaction design (UI/UX). With a passion for design and
            development, I always strive to improve my skills and 
            expand my capabilities. A few hobbies of mine include 
            playing video games, watching kdramas, and listening to 
            music!</p>
        </div>
      </div>
      <section id="important" className="mt-[clamp(5rem,10vw,14rem)] min-h-0 bg-transparent">
        <div className="important-surface bg-[#232323] bg-grainy pb-[clamp(5rem,12vw,14rem)]">
        <div id="experience" ref={experienceRef} className="bg-transparent px-[clamp(1.25rem,7vw,11rem)] py-[clamp(4rem,8vw,7rem)]">
          <h1 className="bg-transparent pb-[clamp(2.5rem,6vw,5rem)] font-GeneralSans text-[clamp(2rem,6.5vw,8rem)] font-medium leading-[.95] text-[#F2F0E9]">MY <span className="bg-transparent font-bold text-[#A6BBDA]">EXPERIENCE*</span></h1>
          {/* Experience entries share the same layout, so their content lives in data. */}
          <ExperienceItem {...experiences[0]} />
          <hr className="my-10 xl:my-16 2xl:my-16"></hr>
          <ExperienceItem {...experiences[1]} />
          <a href="https://drive.google.com/file/d/11_asgdg3JulCvTlK4zMPzXJfsez5OjcW/view?usp=sharing" target="_blank" rel="noreferrer" className="mt-8 flex justify-end bg-transparent">
            <span className="bg-transparent py-[clamp(2rem,6vw,6rem)] font-GeneralSans text-[clamp(1.1rem,2.8vw,2.5rem)] font-semibold text-[#F2F0E9] transition-transform duration-300 ease-in-out hover:translate-x-5">view full resume here →</span>
          </a>
        </div>
        <div id="projects" ref={projectsRef} className="bg-transparent px-[clamp(1.25rem,7vw,11rem)] py-[clamp(4rem,8vw,7rem)]">
          <h1 className="bg-transparent pb-6 font-GeneralSans text-[clamp(2rem,6.5vw,8rem)] font-medium leading-[.95] text-[#F2F0E9] xl:pb-10 2xl:pb-20">SELECTED <span className="bg-transparent font-bold text-[#A6BBDA]">WORKS*</span></h1>
          <div ref={projectsCarouselRef} className="projects-carousel bg-[#232323] bg-grainy">
            <div className="projects-number-layer max-[1023px]:hidden" aria-hidden="true">
              {projects.map((project) => (
                <span className="project-number-display" key={`display-${project.number}`}>{project.number}.</span>
              ))}
            </div>
            {projects.map((project) => (
              <Project {...project} key={project.number} />
            ))}
          </div>
        </div>
        </div>
      </section>
      <div id="socials" ref={socialsRef} className="socials-section relative isolate overflow-x-clip bg-transparent pb-[clamp(2rem,5vw,5rem)]">
      <svg
        className="socials-wave absolute inset-x-0 bottom-0 z-0 h-auto w-full opacity-100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -10 100 38"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="socials-wave-path socials-wave-path--desktop"
          fill="#E1DED6"
          d="M0 14 C27 -10 73 -10 100 14 V34 H0 Z"
        />
        <path
          className="socials-wave-path socials-wave-path--mobile"
          fill="#E1DED6"
          d="M0 14 C27 4 73 4 100 14 V34 H0 Z"
        />
        <path
          className="socials-wave-path socials-wave-path--intermediate"
          fill="#E1DED6"
          d="M0 10 C27 -8 73 -8 100 10 V34 H0 Z"
        />
      </svg>
        <div className="relative z-10 bg-transparent">
          <h1 className="bg-transparent pt-[clamp(7rem,14vw,15rem)] text-center font-GeneralSans text-[clamp(2rem,6.5vw,8rem)] font-medium leading-[.95] text-[#78716B] max-tablet:px-1 max-tablet:pt-[clamp(4rem,10vw,6rem)] max-tablet:text-[clamp(1.35rem,7vw,3.25rem)] max-tablet:tracking-[-.04em] max-tablet:whitespace-nowrap">LET'S <span className="bg-transparent font-bold text-[#7089AF]">KEEP IN TOUCH*</span></h1>
          <div id="icons" className="relative z-10 mt-[clamp(2rem,4vw,4rem)] flex items-center justify-center gap-[clamp(1.25rem,6vw,6rem)] bg-transparent max-tablet:mt-[clamp(2rem,6vw,4rem)] max-tablet:gap-[clamp(1.25rem,6vw,2.75rem)]">
            <a className="social-icon bg-transparent transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105" href="mailto:amyokuma@gmail.com" aria-label="Email Amy">
              <svg className="h-auto w-[clamp(2rem,5vw,5rem)] bg-transparent hover:opacity-70 max-tablet:w-[clamp(2.25rem,7vw,3.5rem)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path className="bg-transparent" fill="#78716b" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            </a>
            <a className="social-icon bg-transparent transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105" href="https://www.linkedin.com/in/amy-okuma-14210b16b/" target="_blank" rel="noreferrer" aria-label="Amy on LinkedIn">
              <svg className="h-auto w-8 lg:w-10 xl:w-14 2xl:w-20 bg-transparent hover:opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="bg-transparent" fill="#78716b" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
            </a>
            <a className="social-icon bg-transparent transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105" href="https://www.instagram.com/amyokuma/" target="_blank" rel="noreferrer" aria-label="Amy on Instagram">
              <svg className="h-auto w-8 lg:w-10 xl:w-14 2xl:w-20 bg-transparent hover:opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="bg-transparent" fill="#78716b" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
            <a className="social-icon bg-transparent transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105" href="https://github.com/amyokuma" target="_blank" rel="noreferrer" aria-label="Amy on GitHub">
              <svg className="h-auto w-8 lg:w-10 xl:w-14 2xl:w-20 bg-transparent hover:opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path className="bg-transparent" fill="#78716b" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </a>
            <a className="social-icon bg-transparent transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105" href="https://open.spotify.com/user/amy._.okuma?si=5b317565d14d40e9" target="_blank" rel="noreferrer" aria-label="Amy on Spotify">
              <svg className="h-auto w-8 lg:w-10 xl:w-14 2xl:w-20 bg-transparent hover:opacity-70" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path className="bg-transparent" fill="#78716b" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
