export default function NavbBar() {
    return (
        <>
            <div className=" fixed flex w-full h-fit text-white bg-purple-400 py-2 px-5 items-center justify-end ">
                <ul className="flex gap-8 h-fit items-center font-light">
                    <a href="" className="navbar-elements">Home</a>
                    <a href="" className="navbar-elements">About</a>
                    <a href="" className="navbar-elements">Work</a>
                    <a href="" className="navbar-elements">Contact</a>
                    <button className="rounded-md bg-purple-700 text-white px-4 py-2">Deploy me</button>
                </ul>
            </div>

        </>
    )

}