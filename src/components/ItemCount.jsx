import { useState } from "react";

export const ItemCount = () => {

    const [value, setValue] = useState(0);

    return (

        <div>
            <button className="btn btn-outline-success" onClick={() => setValue(value - 1)}>
                -
            </button>
            <span className="m-3">{value}</span>
            <button className="btn btn-outline-success" onClick={() => setValue(value + 1)}>
                +
            </button>
        </div>
    );
};
