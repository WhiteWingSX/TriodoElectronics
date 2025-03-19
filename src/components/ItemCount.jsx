import { useState, useContext } from "react";
import {cartContext} from "../context/cartContext.js";

export const ItemCount = ({item}) => {

    const [value, setValue] = useState(0);
    const {addToCart} = useContext(cartContext);

    if (value < 0) {
        setValue(0);
    }

    const handleAddToCart = () => {
        addToCart({... item, quantity: value});
    }

    return (
        <div>
            <button className="btn btn-outline-success" onClick={() => setValue(value - 1)}>
                -
            </button>
            <span className="m-3">{value}</span>
            <button className="btn btn-outline-success" onClick={() => setValue(value + 1)}>
                +
            </button>
            <div className="mt-3">
                <button
                    className="btn btn-outline-success"
                    onClick={handleAddToCart}
                >Añadir al carro</button>
            </div>
        </div>
    );
};
