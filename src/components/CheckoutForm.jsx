

export const CheckoutForm = () => {

    const submitForm = (e) => {
        e.preventDefault()
    }

    const order = {
        items: [],
        user: {},
        time: null,
        total: 124124
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
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="Check1"/>
                <label className="form-check-label" htmlFor="Check1" aria-required>Aceptas los terminos de condiciones y servicios</label>
            </div>
            <button type="submit" className="btn btn-success">¡Completa tu compra!</button>
        </form>
    );
};
