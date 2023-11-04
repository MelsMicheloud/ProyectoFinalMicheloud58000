import './ItemDetail.css'
import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { NavLink } from "react-router-dom";
import {CartContext} from "../CartContext/CartContext";
//import { Context } from '../../context/Context';
//import {Context} from "../../Context";


const ItemDetail = ({ id, name, img, category, description, price, stock })=> {
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addToCart } = useContext(CartContext);

    const onAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = { id, name, img, category, description, price, stock };
    
        addToCart(item, quantity);
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className= "Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {quantityAdded > 0 ? (
                    <NavLink to={`/cart`}>
                        <button>Finalizar mi compra</button>
                    </NavLink>
                ):(
                    <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
                )}
            </footer>
        </article>
    );
}

export default ItemDetail;