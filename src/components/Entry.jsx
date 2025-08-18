import marker from "/src/assets/marker.png"

function Entry() {
    return (
        <article className="flex m-10 gap-5 h-auto items-stretch justify-center">
            <div className="w-[125px] overflow-hidden shrink-0">
                <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji" className="object-cover h-full w-full rounded"/>
            </div>
            <div className="py-[10px] max-w-150">
                <img src={marker} alt="Pin icon" className="w-[7px] inline-block mr-2"/>
                <span className="uppercase mr-2 text-[0.65rem] tracking-widest">Japan</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
                   className="text-[#918E9B] text-[0.65rem] underline">
                    View on Google Maps
                </a>

                <h2 className="font-bold text-[1.5rem] mb-[10px]">Mount Fuji</h2>
                <p className="font-bold text-[0.65rem]">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="text-[0.65rem]">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </article>
    )
}

export default Entry;