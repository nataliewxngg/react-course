export default function Letter(props) {
    return (
        <div className="bg-[#323232] border-b-1 border-[#f9f4da] w-10 h-10 flex justify-center items-center">
            <span className="text-[#f9f4da] font-bold text-[1.125rem]">{props.text}</span>
        </div>
    );
}