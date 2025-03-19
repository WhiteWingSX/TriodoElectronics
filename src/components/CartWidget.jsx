import { useContext} from "react";
import { cartContext } from "../context/cartContext.js";
import {useNavigate} from "react-router";

export const CartWidget = () => {

    const {getQuantity} = useContext(cartContext);
    const navigate = useNavigate();

    const result = getQuantity()

    const goToCart = () => {
        navigate("/cart")
    }

    return (
        <button
            className='shoppingCountContainer d-flex align-items-center border rounded-pill p-1 me-5 '
            onClick={goToCart}
        >
            <i className="bi bi-bag ps-1 pe-1"></i>
            <p className='countItems d-flex justify-content-center align-items-center border rounded-circle m-0'>{result}</p>
        </button>
    );
};
