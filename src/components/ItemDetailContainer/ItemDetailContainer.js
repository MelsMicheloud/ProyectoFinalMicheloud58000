import './ItemDetailContainer.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
//import { getProductById } from '../../asyncMock';

import {getDoc, doc} from "firebase/firestore";
import { pl } from "../../config/firebase";

const ItemDetailContainer =()=>{
    const [product,setProduct] = useState(null);

    const { itemId } = useParams();
    
    useEffect(()=>{
/*         getProductById(itemId)
        .then(response => {
            setProduct(response);
        })
        .catch(error => {
            console.error(error);
        }) */
    const docProducts = doc(pl, "Productos", itemId);
    getDoc (docProducts)
    .then((response)=> {
        const data = response.data();
        const productAdap = { id: response.id, ...data};
        setProduct(productAdap);
    })
    .catch((error) => console.log(error));
    },[itemId]);
    
    return(
        <div className="container">
            <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;