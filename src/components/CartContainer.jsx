import {useContext} from "react";
import {cartContext} from "../context/cartContext.js";
import { CartList } from "./CartList.jsx";
import {useNavigate} from "react-router";

export const CartContainer = () => {

    const navigate = useNavigate();
    const {cart, deleteAllItems} = useContext(cartContext)

    const goToCheckout = () => {
        navigate("/checkout")
    }

    const deleteAllProducts = () => {
        deleteAllItems()
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            {cart.length === 0 ?
                (
                    <h2 className="text-center mt-5">No haz añadido nada al carro todavia</h2>
                )
                :
                (
                    <div className="d-flex flex-column justify-content-center align-items-center w-100">
                        <CartList items={cart}/>

                        <button onClick={goToCheckout} className='mt-5 btn btn-success w-25'>
                            Confirma tu compra
                        </button>

                        <button onClick={deleteAllProducts} className='mt-2 btn btn-outline-danger w-25'>
                            Eliminar carro
                        </button>
                    </div>
                )
            }

        </div>
    );
};
