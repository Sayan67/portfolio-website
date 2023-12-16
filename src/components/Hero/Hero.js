"use client"
import { useRef } from "react";
import Work from "../Work/Work";

import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import {useGSAP} from '@gsap/react'
//Icons form react-icons
import { GrTerminal } from "react-icons/gr";


//Fonts
import { Roboto, Italiana } from "next/font/google"
import { GSP_NO_RETURNED_VALUE } from "next/dist/lib/constants";
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
})

const italiana = Italiana({
    subsets: ['latin'],
    weight: '400',
})

export default function Hero() {
    const hero = useRef();
    useGSAP(
        ()=>{
            gsap.from('.hero',{duration:0.8, opacity:0, y:40, stagger:0.2})
            gsap.from('.para',{delay:2,duration:2, opacity:0, y:40})
            gsap.from('#developer',{delay:1.5,duration:2, x:-100})
            gsap.from('#designer',{delay:1.5,duration:2, x:100})

        },
        {scope:hero}
    )
    return (
        <>
            <div ref={hero} className={`hero-main w-full text-slate-950 py-[3rem]`}>


                <div className="flex flex-wrap justify-center leading-none gap-8 tracking-[0.02rem] w-full text-[6rem] px-[13rem] pt-[8rem] pb-[2rem] font-[950]">
                    <h1 className="hero">Im</h1>
                    <h1 className="hero">Sayan</h1>
                    <h1 className="hero">Das<span id="dot" className="font-normal text-[#ff6000]"></span></h1>
                </div>
                <div className="flex justify-center text-center w-full px-[13.4rem] pb-[9rem] tracking-[0.04rem] text-[2.5rem]">
                    <h3 className="mr-[3rem] mx-4"><span className="developer">Developer </span><span className="hero text-[#ffa559]">and</span><span className="designer"> Designer</span></h3>
                </div>
                <div id="Hero-last" style={roboto.style} className="w-full flex justify-center px-[5rem] pb-[15rem] tracking-[0.04em] text-[1.5rem] font-light">
                    <p className="para w-[80%] text-center">Empowering <span className="font-normal">Businesses and Startups</span> by creating digital wonders Delivering  smooth customized websites</p>
                </div>
                <Work/>
            </div>
        </>
    )
}