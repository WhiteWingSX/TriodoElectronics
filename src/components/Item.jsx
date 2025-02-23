import { Link } from "react-router";

export const Item = ({ producto }) => {
    return (
        <div className="col-md-6 col-lg-3 mt-1 mb-4">
            <div className="card p-2 m-1 w-auto h-100 d-flex flex-column">
                <div className="d-flex justify-content-center">
                    <img src={producto?.image} width="200px" height="210px" alt={producto?.title} />
                </div>

                <div className="card-body d-flex flex-column flex-grow-1">
                    <div className="card-text fw-bold text-secondary">{producto?.category}</div>
                    <div className="card-title fw-bold fs-6">{producto?.title}</div>
                    <div className="card-text fs-5 text-success-emphasis">$ {producto?.price}</div>
                </div>

                <div className="card-footer d-grid p-0 pt-2">
                    <Link to={`/item/${producto?.id}`} className="btn btn-outline-success">
                        Ver más...
                    </Link>
                </div>
            </div>
        </div>
    );
};
