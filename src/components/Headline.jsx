export default function Headline() {
    return (
        <section className="w-[352px] h-[144px] text-center">
            <header>
                <h1 className="text-[#f9f4da] text-[20px] font-medium">Assembly Endgame</h1>
                <p className="text-[#8e8e8e] text-[14px] font-medium">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </header>

            <div className="bg-[#7a5ea7] h-[59px] flex justify-center items-center mt-[20px]"> {/* background-color should be dynamic - pass in props*/}
                <p className="text-[#f9f4da] text-[16px]">Place notice text here</p>
            </div>
        </section>
    )
}