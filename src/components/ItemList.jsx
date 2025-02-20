import { Item } from './Item.jsx';

export const ItemList = ({items}) => {
    return (
        <div className="container">
            <div className="row">
                {
                    items.map(producto =>
                        (<Item producto={producto} key={producto.id}/>))
                }
            </div>
        </div>

    )
}
