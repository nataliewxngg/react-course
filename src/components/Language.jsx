export default function Language(props) {
    return (
        <div 
            style={{backgroundColor: props.color}} 
            className="rounded-[3px] p-[4.5px]"
        >
            <p className="text-[12px] font-bold" style={{color: props.textCol}}>{props.name}</p>
        </div>
    )
}