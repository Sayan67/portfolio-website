import React from 'react'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import { Cinzel } from 'next/font/google'

function Work() {
    return (
        <>
            <div className='w-full h-screen overflow-scroll'>
                <div className=' w-full h-screen bg-[#fef8f1] z-[20]'></div>
                <Contact/>
                <Footer />

            </div>
        </>
    )
}

export default Work