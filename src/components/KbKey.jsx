export default function KbKey(props) {
    function getBgColor() {
        if (props.status == "unused") return "#fcba29";
        else if (props.status == "correct") return "#10a95b";
        else return "#ec5d49"
    }
    
    return (
        <div style={{ backgroundColor: getBgColor() }} className="w-10 h-10 flex
        items-center justify-center rounded-sm">
            <span>{props.text}</span>
        </div>
    )
}