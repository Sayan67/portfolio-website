import React from 'react'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'

import { Roboto } from 'next/font/google'
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400'],
})


function Work() {
    //Project Descriptions
    const projectDesc = [
        {
            name: "Project name",
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur rem, labore culpa soluta sit dolor? Quia quod maiores aperiam harum.',
            tech: ["HTLM", "CSS", "JS", "MongoDB", "ExpressJS"]
        },
        {
            name: "Project name",
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur rem, labore culpa soluta sit dolor? Quia quod maiores aperiam harum.',
            tech: ["HTLM", "CSS", "JS", "MongoDB", "ExpressJS"]
        },
        {
            name: "Project name",
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur rem, labore culpa soluta sit dolor? Quia quod maiores aperiam harum.',
            tech: ["HTLM", "CSS", "JS", "MongoDB", "ExpressJS"]
        },
        {
            name: "Project name",
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur rem, labore culpa soluta sit dolor? Quia quod maiores aperiam harum.',
            tech: ["HTLM", "CSS", "JS", "MongoDB", "ExpressJS"]
        },

    ]

    return (
        <>
            <div style={roboto.style} id='work1' className=' w-full px-[10.4rem] pb-12'>
                <h1 className='leading-none text-[3.5rem]'>My</h1>
                <div id='work2' className='flex  leading-none px-[2.4rem] w-full bg-[#fef8f1]'>
                    <h1>Works</h1>
                </div>
                {/* work body */}
                <div id='work-images' className='flex w-full mt-7 justify-between'>
                    <div id="work-left" style={roboto.style} className='w-[45%] h-[90vh] overflow-auto  gap-5 justify-center px-[2rem]'>
                        {projectDesc.map((item) => {
                            return(<div className='flex flex-col gap-5 justify-center  w-full h-[90vh]'>
                            <h1 className='text-3xl'>{item.name}</h1>
                            <p>{item.desc}</p>
                            <div className='flex w-full gap-2'>
                                {item.tech.map((item)=>{
                                    return(

                                        <h2 className='bg-slate-300 px-2 py-1 opacity-50 rounded-3xl'>{item}</h2>
                                    )
                                })}
                            </div>
                        </div>)
                        })}

                    </div>
                    <div id="work-right" className='flex flex-col justify-center items-end w-[45%] h-[90vh] border-blue-600 border-2'>
                        <div className='w-[95%] h-[90%]'></div>
                    </div>

                </div>
                <div className='mt-14 flex justify-center font-extralight'>
                    <button className='border-[1px] rounded-full px-4 py-2 border-slate-900 '>See all projects</button>
                </div>

            </div>
        </>
    )
}

export default Work