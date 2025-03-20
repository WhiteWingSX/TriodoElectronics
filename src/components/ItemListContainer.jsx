import { useState, useEffect} from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router";
import { getProductByCategory, getProducts } from "../firebase/database.js";

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        if (id) {
            getProductByCategory(id).then(res => setItems(res));
        } else {
            getProducts().then(res => setItems(res));
        }
    }, [id]);

    return (
        <ItemList items={items} />
    )
}
