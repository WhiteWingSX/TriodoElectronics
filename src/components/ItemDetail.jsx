import { ItemCount } from "./ItemCount.jsx";

export const ItemDetail = ({detail}) => {

    return (
        <div className="container d-flex">
            <div className="m-3">
                <img src={detail?.image} width={400} height={420}/>
            </div>
            <div className="d-grid m-3">
                <h1 className="fs-3">{detail?.name}</h1>
                <p>{detail?.description}</p>
                <p className="fs-4 fw-bold text-success-emphasis">${detail?.price}</p>
                <ItemCount item={detail}/>
            </div>
        </div>
    );
};
