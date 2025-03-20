import {useContext} from "react";
import {cartContext} from "../context/cartContext.js";
import { CartItem } from "./CartItem.jsx";

export const CartList = () => {

    const {cart} = useContext(cartContext)

    return (
        <ul className="list-group w-50 mt-5">
            {cart.map(prod => <CartItem prod={prod} key={prod.id} />)}
        </ul>
    );
};
