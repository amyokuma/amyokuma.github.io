import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Loading({ onComplete }) {
    const [count, setCount] = useState(0);

    const getRandomDelay = () => Math.floor(Math.random() * 40) + 1;

    useEffect(() => {
        if(count < 100) {
            const delay = getRandomDelay();
            const timer = setTimeout(() => {
                setCount(count+1);
            }, delay);
            return () => clearTimeout(timer);
        } else {
            gsap.to('#loader-text', {
                duration: 1, 
                opacity: 0,
            });
            gsap.to('#loader', {
                duration: 1, 
                opacity: 0,
            });
            gsap.to('#bar', {
                duration: 1.5,
                height: 0,
                stagger: {
                    amount: 0.5,
                },
                ease: "power4.inOut",
                onComplete: onComplete,
            });
        }
    }, [count, onComplete]);

    useGSAP(() => {
        gsap.from('#loader-text', {duration: 0.8, opacity: 0, x: -100})
        gsap.from('#loader', {duration: 1, opacity: 0})
    });

    return (
        <div id="loading-container" className="bg-transparent w-full h-full fixed z-50 flex flex-col justify-center items-center">
             <svg className="bg-transparent absolute" viewBox="0 0 1000 1000">
                <path d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
            </svg>
            <h1 className="z-50 w-full h-full flex text-center justify-center items-end text-[#F2F0E9] bg-transparent text-4xl lg:text-5xl font-bold" id="loader-text">Amy Okuma's</h1>
            <h1 className="z-50 bg-transparent text-[#B9B3A9] text-4xl lg:text-5xl font-extrabold" id="loader-text">Portfolio 2024</h1>
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
    )
}

export default Loading
