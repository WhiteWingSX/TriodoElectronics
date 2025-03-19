import {useContext} from "react";
import {cartContext} from "../context/cartContext.js";

export const CartList = () => {

    const {cart} = useContext(cartContext)

    return (
        <ul className="list-group w-50 mt-5">
            {cart.map(prod => <li className="list-group-item" key={prod.id}>
                <div className="d-flex">
                    <img
                        src={prod.image}
                        alt={prod.name}
                        style={{width: "80px", height: "80px"}}
                    />
                    <div className="d-grid">
                        <p className="fs-5 ms-4">{prod.name}</p>
                        <p className="ms-4">cantidad: {prod.quantity}</p>
                    </div>

                </div>
                <button className="d-flex justify-content-end border-0 w-100">
                    <i className="bi bi-trash text-danger"/>
                </button>
            </li>)}
        </ul>
    );
};
