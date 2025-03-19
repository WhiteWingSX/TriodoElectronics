import { useState,useEffect } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail.jsx";
import { getProduct } from "../firebase/database.js";


export const ItemDetailContainer = () => {

    const [detail, setDetail] = useState();
    const {id} = useParams()

    useEffect(() => {
            getProduct(id).then(res => setDetail(res))
    }, [id]);

    return (
        <ItemDetail detail={detail}/>
    );
};
