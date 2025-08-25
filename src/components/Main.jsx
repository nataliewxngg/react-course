import { useState, useEffect } from "react";

export default function Main() {
    const [rockets, setRockets] = useState({});
    
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/rockets")
            .then(res => res.json())
            .then(data => setRockets(data));
        console.log("Rockets data fetched!")
    }, []);

    return <pre>{JSON.stringify(rockets)}</pre>
}