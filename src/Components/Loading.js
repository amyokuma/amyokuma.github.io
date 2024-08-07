import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Loading() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count < 100) {
            const timer = setTimeout(() => {
                setCount(count+1);
            }, 10);
            return () => clearTimeout(timer);
        }
    }, [count]);

    useGSAP(() => {
        gsap.from('#loader-text', {duration: 0.8, opacity: 0, x: -100})
        gsap.from('#loader', {duration: 1, opacity: 0})
    });

    return (
        <div className="bg-grainy w-full h-full fixed z-50 flex flex-col justify-center items-center">
            <h1 className="w-full h-full flex text-center justify-center items-end text-[#F2F0E9] bg-transparent text-5xl font-bold" id="loader-text">Amy Okuma's</h1>
            <h1 className="bg-transparent text-[#B9B3A9] text-5xl font-extrabold" id="loader-text">Portfolio 2024</h1>
            <div className="bg-transparent flex w-full h-full">
                <h1 className="w-full h-full bg-transparent flex justify-start items-end text-[#F2F0E9] text-2xl z-50 pl-20 pb-20 font-bold" id="loader">Loading . . .</h1>
                <h1 className="w-full h-full bg-transparent flex justify-end items-end text-[#F2F0E9] text-9xl z-50 pr-20 pb-20 font-bold" id="loader">{count}</h1>
            </div>
        </div>
    )
}

export default Loading
