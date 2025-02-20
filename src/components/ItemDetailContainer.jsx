import { useState,useEffect } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail.jsx";


export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState();
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(res => setDetail(res))
    }, [id]);

    return (
        <ItemDetail detail={detail}/>
    );
};
