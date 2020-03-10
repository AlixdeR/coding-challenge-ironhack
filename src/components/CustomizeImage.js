import React, { useState } from "react";

export default function CustomizeImage() {
    const [url, setUrl] = useState("");
    const [size, setSize] = useState(50);

    const handleChangeSize = e => {
        setSize(e.target.value)
    }

    const handleChangeUrl = e => {
        setUrl(e.target.value)
    }

    return (
        <div>
        <h1>Customize Image</h1>
            <input className="input" type="text" placeholder="Enter image url here" onChange={handleChangeUrl}></input>
            <br></br><br></br>
            <input className="input" type="range" min="0" max="200" onChange={handleChangeSize} defaultValue={size}></input>
            <p>{size} x {size} px</p>
            <img src={url} alt="url-image" height={size} width={size}/>
        </div>
    )
}
