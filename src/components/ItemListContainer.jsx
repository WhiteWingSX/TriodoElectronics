import { useState, useEffect} from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router";

export const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        const allProducts = 'https://fakestoreapi.com/products'
        const oneCategory = `https://fakestoreapi.com/products/category/${id}`

            fetch(id ? oneCategory : allProducts)
                .then(res=>res.json())
                .then(res => setItems(res))
    }, [id]);

    return (
        <ItemList items={items} />
    )
}
