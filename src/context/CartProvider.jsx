import {cartContext} from "./cartContext.js";
import {useState} from "react";

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    //Agregar al carro
    const addToCart = (item) => {
        setCart([... cart, item]);
    }

    //Total de productos
    const getQuantity = () => {
        const quantities = cart.map(product => product.quantity);
        const result = quantities.reduce((acc, q) => acc + q, 0);

        return result
    }

    // Total precio de productos
    const getTotalPrice = () => {
        const prices = cart.map(price => price.price*price.quantity);
        const result = prices.reduce((acc, q) => acc + q, 0);

        return result
    }

    // eliminar producto de la lista
    const deleteItem = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }

    // eliminar lista
    const deleteAllItems = () => {
        setCart([]);
    }

    return (
        <cartContext.Provider value={{addToCart, getQuantity, getTotalPrice, deleteItem, deleteAllItems, cart }}>
            {children}
        </cartContext.Provider>
    )
}
