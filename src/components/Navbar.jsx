import logo from '../assets/img/Logo/TriodoLogo.png';
import '../style.css'
import { CartWidget } from "./CartWidget.jsx";

export const Navbar = () => {



    return (
        <>
            {/*TODO: Modificar la distibucion del Navbar*/}
            <div className="d-flex justify-content-center align-items-center" style={{backgroundColor: '#6EC602', width: '100%', height: '20px'}}>
                <span className="fs-6" style={{color: "white", fontSize: 15}}>¡Despachos y envios por todo el país!</span>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid ">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src={logo} alt="Triodo_logo" style={{width: '70px', height: '70px'}}/>
                            {/*TODO: Realizar modificacion logo en mobile version*/}
                        <h1 className="FontLogo fw-bold">Triodo Electronics</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="justify-content-end collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Resistores</a>
                        </div>
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Capacitores</a>
                        </div>
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Circuitos Integrados</a>
                        </div>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
            <hr/>
        </>

    );
};
