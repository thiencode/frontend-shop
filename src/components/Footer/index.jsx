
export default function Footer() {
    return (
        <div className="text-center text-white" >
            <div className=" p-6 bg-[#0a4275]">
                <div className="">
                    <p className="flex justify-center items-center">
                        <span className="mr-4">Register for free</span>
                        <button type="button" className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                            Sign up!
                        </button>
                    </p>
                </div>
            </div>

            <div className="text-center p-4 bg-[#08355e]">
                © 2021 Copyright:
                <a className="text-white" href="https://tailwind-elements.com/"> Tailwind Elements</a>
            </div>
        </div>
    )
}