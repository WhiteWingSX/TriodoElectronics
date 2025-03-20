import {useContext} from "react";
import {cartContext} from "../context/cartContext.js";

export const CartItem = ({prod}) => {

    const { deleteItem } = useContext(cartContext);

    const deleteProduct = () => {
        deleteItem(prod.id);

    return (
        <li className="list-group-item" key={prod.id}>
            <div className="d-flex">
                <img
                    src={prod?.image}
                    alt={prod?.name}
                    style={{width: "80px", height: "80px"}}
                />
                <div className="d-grid">
                    <p className="fs-5 ms-4">{prod?.name}</p>
                    <p className="ms-4">cantidad: {prod?.quantity}</p>
                </div>

            </div>
            <button onClick={deleteProduct} className="d-flex justify-content-end border-0 w-100">
                <i className="bi bi-trash text-danger"/>
            </button>
        </li>
    );
};
