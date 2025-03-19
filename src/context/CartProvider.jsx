import {cartContext} from "./cartContext.js";
import {useState} from "react";

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([... cart, item]);
    }

    const getQuantity = () => {
        const quantities = cart.map(product => product.quantity);
        const result = quantities.reduce((acc, q) => acc + q, 0);

        return result
    }

    const deleteItem = (id) => {

    }

    return (
        <cartContext.Provider value={{addToCart, getQuantity, cart}}>
            {children}
        </cartContext.Provider>
    )
}
