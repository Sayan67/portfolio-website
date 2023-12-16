
//Icons
import { FaRegCopyright } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";


//Fonts
import { Carme,Roboto,Cinzel } from "next/font/google"
const roboto = Roboto({
    subsets: ['latin'],
    weight: '300',
    style: 'normal',
})
const cinzel = Cinzel({
    subsets:['latin'],
    weight:'400',
})




export default function NavbBar() {//bg-#08090c
    return (
        <>
            <div className="flex fixed w-full h-16 mt-3 justify-center items-center text-white">
                <div className="flex w-fit h-16 bg-slate-400 backdrop-blur-sm rounded-full justify-center items-center px-8 py-1">
                    <ul className="flex justify-center gap-5 items-center">
                        <li>Work</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                </div>
            </div>
        </>
    )

}