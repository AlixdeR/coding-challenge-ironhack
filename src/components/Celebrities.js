import React, { useState, useEffect} from "react";
import axios from "axios";

export default function Celebrities() {
    const [celebrities, setCelebrities] = useState([]);

    useEffect(() => {
        axios
        .get("https://api.themoviedb.org/3/person/popular?page=1&api_key=4609bb4a9cc51f8e051fcf2c7bf6f944")
        .then(res => {
            setCelebrities(res.data.results)
        })
        .catch( err=> console.log(err))
    }, []);


    return (
        <div>
            <h1>Celebrities</h1>
            {celebrities.map((celebrity, i) => 
                <div className="celebrity" key={i}><img className="celeb-img" src={"https://image.tmdb.org/t/p/w185" + celebrity.profile_path}/>{celebrity.name}</div>)}
        </div>
    )
}
