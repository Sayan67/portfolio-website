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
            gsap.from('.hero',{duration:1, opacity:0, y:40, stagger:0.2})

            gsap.from('.para',{duration:2, opacity:0, y:40, stagger:0.2})

        },
        {scope:hero}
    )
    return (
        <>
            <div ref={hero} className={`${italiana.className} w-full bg-[#fef8f1] text-slate-950 `}>


                <div className="flex flex-wrap justify-center leading-none gap-8 tracking-[0.02rem] w-full text-[7rem] px-[13rem] pt-[8rem] pb-[2rem] font-semibold">
                    <h1 className="hero">I'm</h1>
                    <h1 className="hero">Sayan</h1>
                    <h1 className="hero">Das<span id="dot" className="font-normal text-[#ff6000]">.</span></h1>
                </div>
                <div className="flex justify-center text-center w-full px-[13.4rem] pb-[9rem] tracking-[0.04rem] text-[2.5rem] ">
                    <h3 className="mr-[3rem]">Developer <span className="hero text-[#ffa559]">&</span> Designer</h3>
                </div>
                <div id="Hero-last" className="w-full flex justify-center px-[5rem] pb-[15rem] tracking-[0.04em] text-[1.5rem]">
                    <p className="para w-[80%] text-center">Empowering <span className="font-bold">Businesses and Startups</span> by creating digital wonders. Delivering  smooth customized websites.</p>
                </div>
                <Work/>
            </div>
        </>
    )
}