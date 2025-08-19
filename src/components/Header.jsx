import chefClaudeIcon from "/src/assets/chef-claude-icon.png"

function Header() {
    return (
        <header
            className="flex justify-center items-center gap-[10px] flex-wrap
            shadow-[0px_1px_3px_0px_rgba(0,0,0,0.10),0px_1px_2px_0px_rgba(0,0,0,0.06)]
            py-[16px] px-[8px]">
            <img src={chefClaudeIcon} alt="Chef Claude Icon" className="w-[30px]"/>
            <span className="text-[1.3rem]">Chef Claude</span>
        </header>
    )
}

export default Header;