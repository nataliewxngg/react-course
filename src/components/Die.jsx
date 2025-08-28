export default function Die(props) {
    return (
        <button
            className="font-bold text-2xl text-[#2b283a] rounded-sm shadow-[0px_2px_2px_0px_#00000026] w-12 h-12 text-center cursor-pointer"
            style={{ backgroundColor: props.isHeld ? "#59e391" : "#ffffff" }}
            aria-label={`Die ${props.id} is ${props.isHeld ? "held" : "not held"}`}
            aria-pressed={props.isHeld}
            onClick={() => props.hold(props.id)}
        >
            {props.value}
        </button>
    )
}