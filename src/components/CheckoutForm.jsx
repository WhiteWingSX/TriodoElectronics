import {useContext} from "react";
import { cartContext} from "../context/cartContext.js";
import {serverTimestamp} from 'firebase/firestore'
import { createOrder } from "../firebase/database.js";
import MySwal from "sweetalert2";
import {useNavigate} from "react-router";

export const CheckoutForm = () => {

    const {cart, getTotalPrice, deleteAllItems} = useContext(cartContext)
    const navigate = useNavigate();

    const submitForm = async(e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value;
        const name = form.name.value;
        const phone = form.phone.value

        const order = {
            items: cart,
            user: {name, email, phone},
            time: serverTimestamp(),
            total: getTotalPrice()
        }

        const id = await createOrder(order)

        MySwal.fire({
            title: "¡Tu compra se completo con exito!",
            text: `El ID de tu compra es: ${id}`,
        }).then(() => {
            deleteAllItems();
            navigate("/");
        })
    }

    return (
        <form
            className="d-grid justify-content-center align-items-center col-4 w-100 mt-5"
            onSubmit={submitForm}
        >
            <div className="d-flex justify-content-center m-3 ">
                <span className="d-flex align">Porfavor rellene todos los campos</span>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electronico</label>
                <input type="email" className="form-control" id="email" placeholder="ejemplo123@gmail.com" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">nombre</label>
                <input type="text" className="form-control" id="name" placeholder="nombre" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">numero telefonico</label>
                <input type="text" className="form-control" id="phone" placeholder="+56912345678" required/>
            </div>
            <div className="mb-3">
                <label>Al aceptar concuerdas con los terminos de condiciones y servicios</label>
            </div>
            <button type="submit" className="btn btn-success">¡Completa tu compra!</button>
        </form>
    );
};
