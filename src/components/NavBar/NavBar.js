import { Carme } from "next/font/google"
import { FaRegCopyright } from "react-icons/fa";
const carme = Carme({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
})
export default function NavbBar() {
    return (
        <>
            <div style={carme.style} className="mt-8 font-thin fixed flex w-full h-fit text-zinc-400 py-2 px-14  justify-between ">
                <div className="logo flex items-center gap-2">
                    <FaRegCopyright/><h1>daas</h1>
                </div>

                <div>
                    <ul className="navMenu h-fit items-center font-extralight tracking-widest">
                        <a href="" className="navbar-elements">Home</a>
                        <a href="" className="navbar-elements">Work</a>
                        <a href="" className="navbar-elements">About</a>
                        <a href="" className="navbar-elements mr-0">Contact</a>
                        <div className="dot"></div>
                        {/* <button className="rounded-md bg-[#FF6000] text-white px-4 py-2">Deploy me</button> */}
                    </ul>
                </div>

            </div>

        </>
    )

}