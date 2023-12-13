
//Icons
import { FaRegCopyright } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";


//Fonts
import { Carme,Roboto } from "next/font/google"
const roboto = Roboto({
    subsets: ['latin'],
    weight: '300',
    style: 'normal',
})



export default function NavbBar() {//bg-#08090c
    return (
        <>
            <div style={roboto.style} className=" flex w-full h-fit bg-[#fef8f1] text-slate-950 py-11 px-14  justify-between ">
                <div className="logo flex items-center gap-2 hover:text-[#FF6000] hover:duration-500">
                    <FaRegCopyright/><h1>Daas</h1>
                </div>

                <div>
                    <ul className="navMenu flex items-center h-fit font-extralight tracking-[0.2rem]">
                        <a href="" className="navbar-elements">Work</a>
                        <a href="" className="navbar-elements mr-0">Menu</a>
                        <a href="" className=" navbar-elements ml-3 mr-0 text-3xl"><CiMenuBurger/></a>
                        {/* <button className="rounded-md bg-[#FF6000] text-white px-4 py-2">Deploy me</button> */}
                    </ul>
                </div>

            </div>

        </>
    )

}