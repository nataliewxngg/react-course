import getFarewellText from "../utils/utils";

export default function Headline(props) {
    let noticeDesc, noticeHeader = null;
    if (props.gameState === "won") {
        noticeHeader = "You Win!"
        noticeDesc = "Well done! 🎉"
    } else if (props.gameState === "lost") {
        noticeHeader = "Game Over!"
        noticeDesc = "You lose! Better start learning Assembly 😭"
    } else 
        noticeDesc = getFarewellText(props.removedLanguage);
    
    let styles = {};
    if (props.gameState === "won")
        styles = { backgroundColor: "#10a95b" }
    else if (props.gameState === "lost")
        styles = { backgroundColor: "#ba2a2a" }
    else
        styles = { backgroundColor: "#7a5ea7" }

    function displayNotice() {
        if (props.wrongGuess || props.gameState !== "playing") 
            return "";
        return "invisible";
    }

    return (
        <section className="w-[352px] h-[144px] text-center">
            <header>
                <h1 className="text-[#f9f4da] text-[20px] font-medium">Assembly Endgame</h1>
                <p className="text-[#8e8e8e] text-[14px] font-medium">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </header>

            <div className={`h-[59px] flex flex-col justify-center items-center mt-[20px] text-[#f9f4da] rounded-sm ${displayNotice()}`} style={styles}> {/* background-color should be dynamic - pass in props*/}
                {props.gameState!="playing" && <p className="text-[20px]">{noticeHeader}</p>}
                <p className="text-[16px]">{noticeDesc}</p>
            </div>
        </section>
    )
}