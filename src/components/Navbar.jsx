import logo from '../assets/img/Logo/TriodoLogo.png';
import '../style.css'
import { CartWidget } from "./CartWidget.jsx";
import { Link } from "react-router";

export const Navbar = () => {

    return (
        <>
            {/*TODO: Modificar la distibucion del Navbar*/}
            <div className="d-flex justify-content-center align-items-center"
                 style={{backgroundColor: '#6EC602', width: '100%', height: '20px'}}>
                <span className="fs-6" style={{color: "white", fontSize: 15}}>¡Despachos y envios por todo el país!</span>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-flui d-grid">
                    <div className="d-flex justify-content-between align-items-center vw-100 pe-3 ps-3">
                        <Link className="navbar-brand d-flex align-items-center" to="/">
                            <img src={logo} alt="Triodo_logo" style={{width: '70px', height: '70px'}}/>
                            {/*TODO: Realizar modificacion logo en mobile version*/}
                            <h1 className="FontLogo fw-bold">Triodo Electronics</h1>
                        </Link>
                        <CartWidget/>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="navbarStyle justify-content-end collapse navbar-collapse pe-3"
                         id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/category/jewelery">Joyas</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page"
                                  to="/category/electronics">Electronica</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/category/men's clothing">Ropa
                                Hombre</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/category/women's clothing">Ropa
                                Mujer</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
};
