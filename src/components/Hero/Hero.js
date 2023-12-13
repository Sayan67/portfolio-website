"use client"
import Work from "../Work/Work";

import { gsap } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

//Icons form react-icons
import { GrTerminal } from "react-icons/gr";


//Fonts
import { Roboto, Italiana } from "next/font/google"
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
})

const italiana = Italiana({
    subsets: ['latin'],
    weight: '400',
})


export default function Hero() {
    return (
        <>
            <div className={`${italiana.className} w-full bg-[#fef8f1] text-slate-950 `}>


                <div className="flex flex-wrap justify-center leading-none gap-8 tracking-[0.02rem] w-full text-[7rem] px-[13rem] pt-[8rem] pb-[2rem] font-semibold">
                    <h1 className="">I'm</h1>
                    <h1>Sayan</h1>
                    <h1>Das<span className="font-normal text-[#ff6000]">.</span></h1>
                </div>
                <div className="flex justify-center text-center w-full px-[13.4rem] pb-[9rem] tracking-[0.04rem] text-[2.5rem] ">
                    <h3 className="mr-[3rem]">Developer <span className="text-[#FFA559]">&</span> Designer</h3>
                </div>
                <div id="Hero-last" className="w-full flex justify-center px-[5rem] pb-[15rem] tracking-[0.04em] text-[1.5rem]">
                    <p className="w-[80%] text-center">Empowering <span className="font-bold">Businesses and Startups</span> by creating digital wonders. Delivering  smooth customized websites.</p>
                </div>
                <Work/>
            </div>
        </>
    )
}