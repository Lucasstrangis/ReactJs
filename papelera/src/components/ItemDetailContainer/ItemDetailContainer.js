import { useState, useEffect } from "react";
import { getProductsById } from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';

import { useParams } from "react-router-dom"

import { getProductsByCategory, doc } from "../../services/firebase"
import { db } from "../../FirebaseConfig.js"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const docRef = doc(db, "products, itemId")

        getProductsByCategory(docRef)
        .then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data}
            setProduct(productAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })   
}, [itemId])

return(
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer