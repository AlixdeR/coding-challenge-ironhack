import React, { useState } from "react";

export default function Temperature() {
    const [temperature, setTemperature] = useState("");

    const handleChange = e => {
        setTemperature(e.target.value)
    }

    return (
        <div>
        <h1>Temperature</h1>
        <input className="input" type="number" placeholder="Temperature in °C" onChange={handleChange} value={temperature}></input>
        {temperature<10 && <div className="cold-temp">It's cold ❄️</div>}
        {temperature>30 && <div className="warm-temp">It's warm ☀️</div>}
        {temperature>=10 &&  temperature<=30 && <div className="nice-temp">It's nice 🌼</div>}
        </div>
    )
}
