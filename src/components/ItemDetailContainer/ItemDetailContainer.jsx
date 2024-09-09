import { getProduct } from "../../asyncMock"
import React, { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    useEffect(()=>{
        getProduct("S001")
            .then(respuesta => setProduct(respuesta))
    }, [])


  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer