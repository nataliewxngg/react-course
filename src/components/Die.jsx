export default function Die(props) {
    return (
        <button className="font-bold text-2xl text-[#2b283a] rounded-lg shadow-[0px_2px_2px_0px_#00000026] w-12 h-12 bg-white text-center">
            {props.value}
        </button>
    )
}