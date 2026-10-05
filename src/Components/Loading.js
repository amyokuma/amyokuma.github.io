import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Loading({ onComplete, onRevealStart }) {
  const containerRef = useRef(null);
  const exitTimelineRef = useRef(null);
  const readyRef = useRef(false);
  const completionStartedRef = useRef(false);
  const pageReadyRef = useRef(false);
  const counterReadyRef = useRef(false);
  const cancelledRef = useRef(false);
  const [count, setCount] = useState(0);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const finishLoading = () => {
    if (readyRef.current) return;
    readyRef.current = true;
    exitTimelineRef.current?.play();
  };

  useEffect(() => {
    // React Strict Mode re-runs effects in development. Re-arm the guard
    // before starting the single counter loop for the active mount.
    cancelledRef.current = false;

    let counterTimer;
    let holdTimer;
    let maxLoadingTimer;
    let counterValue = 0;

    const finishCounter = (force = false) => {
      if (cancelledRef.current || completionStartedRef.current) return;
      if (!force && (!pageReadyRef.current || !counterReadyRef.current)) return;

      completionStartedRef.current = true;
      window.clearTimeout(counterTimer);
      counterValue = 100;
      setCount(100);
      holdTimer = gsap.delayedCall(0.05, finishLoading);
    };

    const scheduleCounterTick = () => {
      const delay = reduceMotion ? 1 : Math.floor(Math.random() * 40) + 1;
      counterTimer = window.setTimeout(() => {
        if (cancelledRef.current || completionStartedRef.current) return;

        counterValue = Math.min(counterValue + 1, 100);
        setCount(counterValue);

        if (counterValue === 100) {
          counterReadyRef.current = true;
          finishCounter();
          return;
        }

        scheduleCounterTick();
      }, delay);
    };

    scheduleCounterTick();

    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const pageReady = Promise.all([
      fontsReady,
      new Promise((resolve) => {
        if (document.readyState === 'complete') {
          resolve();
        } else {
          window.addEventListener('load', resolve, { once: true });
        }
      }),
    ]);
    const fallback = new Promise((resolve) => {
      window.setTimeout(resolve, reduceMotion ? 500 : 4500);
    });

    Promise.race([pageReady, fallback]).then(() => {
      if (cancelledRef.current) return;
      pageReadyRef.current = true;
      finishCounter();
    });

    maxLoadingTimer = window.setTimeout(
      () => finishCounter(true),
      reduceMotion ? 600 : 4000,
    );

    return () => {
      cancelledRef.current = true;
      window.clearTimeout(counterTimer);
      holdTimer?.kill();
      window.clearTimeout(maxLoadingTimer);
    };
  }, [reduceMotion]);

  useGSAP(() => {
    const container = containerRef.current;

    gsap.from(container.querySelectorAll('#loader-text'), { duration: 0.8, opacity: 0, x: -100 });
    gsap.from(container.querySelectorAll('#loader'), { duration: 1, opacity: 0 });

    const exit = gsap.timeline({
      paused: true,
      onComplete,
    });
    exit.to(container, {
      yPercent: -100,
      duration: reduceMotion ? 0.12 : 1.4,
      ease: reduceMotion ? 'none' : 'power4.inOut',
    });
    exit.call(onRevealStart, [], reduceMotion ? 0.04 : 0.7);
    exitTimelineRef.current = exit;

    if (readyRef.current) exit.play();

    return () => {
      exit.kill();
      exitTimelineRef.current = null;
    };
  }, { scope: containerRef, dependencies: [onComplete, onRevealStart, reduceMotion] });

  return (
    <div ref={containerRef} id="loading-container" className="bg-transparent w-full h-full fixed z-50 flex flex-col justify-center items-center">
      <svg className="bg-transparent absolute" viewBox="0 0 1000 1000">
        <path d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
      </svg>
      <h1 className="z-50 w-full h-full flex text-center justify-center items-end text-[#F2F0E9] bg-transparent text-4xl lg:text-5xl font-bold" id="loader-text">Amy Okuma's</h1>
      <h1 className="z-50 bg-transparent text-[#B9B3A9] text-4xl lg:text-5xl font-extrabold" id="loader-text">Portfolio 2026</h1>
      <div className="bg-transparent flex w-full h-full">
        <h1 className="w-full h-full bg-transparent flex justify-start items-end text-[#F2F0E9] text-2xl z-50 pl-10 md:pl-20 pb-10 md:pb-20 font-bold" id="loader">Loading . . .</h1>
        <h1 className="w-full h-full bg-transparent flex justify-end items-end text-[#F2F0E9] text-8xl z-50 pr-10 md:pr-20 pb-10 md:pb-20 font-bold 2xl:text-9xl" id="loader">{count}</h1>
      </div>
      <div className="bg-transparent w-full h-full fixed flex overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="w-[10vw] h-full bg-grainy" id="bar"></div>
        ))}
      </div>
    </div>
  );
}

export default Loading;
