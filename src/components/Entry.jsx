import marker from "/src/assets/marker.png"

function Entry(props) {
    return (
        <article className="flex m-10 gap-5 h-auto items-stretch justify-center">
            <div className="w-[125px] overflow-hidden shrink-0">
                <img    
                    src={props.img.src} 
                    alt={props.img.alt} 
                    className="object-cover h-full w-full rounded"
                />
            </div>
            <div className="py-[10px] max-w-150">
                <img src={marker} alt="Pin icon" className="w-[7px] inline-block mr-2"/>
                <span className="uppercase mr-2 text-[0.65rem] tracking-widest leading-none">
                    {props.country}
                </span>
                <a href={props.googleMapsLink}
                   className="text-[#918E9B] text-[0.65rem] underline">
                    View on Google Maps
                </a>

                <h2 className="font-bold text-[1.5rem] mb-[10px]">{props.title}</h2>
                <p className="font-bold text-[0.65rem]">{props.dates}</p>
                <p className="text-[0.65rem]">{props.text}</p>
            </div>
        </article>
    )
}

export default Entry;