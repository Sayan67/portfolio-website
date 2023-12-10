"use client"
import { gsap } from "gsap/gsap-core"
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { Poppins,Carme } from "next/font/google"
import { GrTerminal } from "react-icons/gr";
import { GrDrag } from "react-icons/gr";


const poppins = Poppins({
    subsets:['latin'],
    weight:'500'
})
const carme = Carme({
    subsets:['latin'],
    weight:'400'
})
//import localFont from 'next/font/local'
//const montreal = localFont({src:'src/public/neue-montreal-free-demo-pangram-pangram-030418/NeueMontreal-Regular.otf'})

export default function Hero(){
    return(
        <>
            <div  className={`${carme.className} border-b-2 border-[#FF6000] flex items-center w-full h-screen bg-[#191a22] text-[#fef8f1] `}>
                <h1 className="hero-name font-thin ml-28 absolute top-[15rem] text-[7em]">I'm Sayan Das<span className="text-[#FF6000] font-serif hover:text-red-700 rounded-[50%]">.</span></h1>
                <h2 className=" flex items-end ml-28 mt-8 tracking-wider absolute top-[24.4rem] text-[2rem]">Web Designer & Developer<GrTerminal className=" ml-3 mb-1" /></h2>
                <h3 className="ml-28 mt-8 font-[50] tracking-wide absolute top-[30rem] text-[1.25rem]">For  <span className="text-white font-[900] tracking-wider"> Businesses and Startups </span>  looking for someone to give an edge to their dev team.</h3>
            </div>
        </>
    )
}