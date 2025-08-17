function Navbar() {
    return (
        <header className="h-[90px] bg-[#21222a] py-[30px] px-[25px]">
            <nav className="flex h-full items-center">
                <img 
                    src="src/assets/react.svg" 
                    alt="React Logo"
                    className="mr-[7px] w-[40px]"
                />
                <span className="font-bold text-[#61dafb] text-[1.4rem] ml-[7px]">ReactFacts</span>
            </nav>
        </header>
    )
}

export default Navbar;