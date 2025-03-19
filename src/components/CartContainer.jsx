import {useContext} from "react";
import {cartContext} from "../context/cartContext.js";
import { CartList } from "./CartList.jsx";

export const CartContainer = () => {

    const {cart} = useContext(cartContext)

    return (
        <div className="d-flex justify-content-center align-items-center">
            {cart.length === 0 ?
                (
                    <h2 className="text-center mt-5">No haz añadido nada al carro todavia</h2>
                )
                :
                (
                    <CartList items={cart}/>
                )
            }

        </div>
    );
};
