import globe from "/src/assets/globe.png"

function Header() {
    return (
        <header className="bg-[#f45b5a] text-white flex justify-center gap-[8px] p-[10px] text-[0.9rem] flex-wrap">
            <img src={globe} alt="Globe Logo" className="w-[24px]"/>
            <span>my travel journal.</span>
        </header>
    )
}

export default Header;