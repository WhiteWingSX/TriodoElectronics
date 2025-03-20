import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import {cartContext} from "../context/cartContext.js";
import MySwal from "sweetalert2";

export const ItemCount = ({item}) => {

    const [value, setValue] = useState(0);
    const {addToCart, cart} = useContext(cartContext);
    const navigate = useNavigate();

    if (value < 0) {
        setValue(0);
    }

    const handleAddToCart = () => {
        if (value === 0) return;

        const itemExists = cart.some(prod => prod.id === item.id);

        if (!itemExists) {
            addToCart({...item, quantity: value});
        } else {
            MySwal.fire({
                title: "Atencion",
                text: "El producto ya se encuentra en el carro",
            }).then(() => navigate(-1))
        }
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
                >Añadir al carro
                </button>
            </div>
            <div className="mt-3">
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => navigate(-1)}
                >Volver
                </button>
            </div>
        </div>
    );
};
