import logo from '../assets/img/Logo/TriodoLogo.png';
import '../style.css'
import { CartWidget } from "./CartWidget.jsx";
import { Link, NavLink } from "react-router";

export const Navbar = () => {

    return (
        <>
            <div className="d-flex justify-content-center align-items-center "
                 style={{backgroundColor: '#6EC602', width: '100%', height: '20px'}}>
                <span className="fs-6" style={{color: "white", fontSize: 15}}>¡Despachos y envios por todo el país!</span>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary pt-0">
                <div className="container-flui d-grid" style={{backgroundColor: '#fff'}}>
                    <div className="d-flex justify-content-between align-items-center vw-100 ps-3">
                        <Link className="navbar-brand d-flex align-items-center" to="/">
                            <img src={logo} alt="Triodo_logo" style={{width: '70px', height: '70px'}}/>
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
                    <div className="navbarStyle justify-content-end collapse navbar-collapse pe-5"
                         id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink
                                className="nav-link" aria-current="page" to="/category/resistor">
                                Resistores
                            </NavLink>
                        </div>
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to="/category/capacitor">
                                Capacitores </NavLink>
                        </div>
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to="/category/diodos">
                                Diodos </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
