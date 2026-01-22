import { useState } from "react";

function Country() {
    const [name, setName] = useState("United States");
    const [gold, setGold] = useState(0);

    function handleClick() {
        setGold(gold + 1);
    }

    return (
        <div>
            <header>
                <h3>{name}</h3>
            </header>
            <p>
                Gold Medals: {gold}
                <button className="btn" onClick={handleClick}>+</button>
            </p>
        </div>
    )
}

export default Country;