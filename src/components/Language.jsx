export default function Language(props) {
    return (
        <div 
            style={{backgroundColor: props.color}} 
            className="rounded-[3px] p-[4.5px] relative"
        >
            <p className="text-[12px] font-bold" style={{color: props.textCol}}>{props.name}</p>
            {props.eliminated && <div className="absolute rounded-[inherit] left-0 top-0 w-full h-full bg-black/75 flex justify-center items-center">💀</div>}
        </div>
    )
}