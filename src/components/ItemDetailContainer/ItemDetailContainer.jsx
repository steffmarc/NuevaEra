import { getProduct } from "../../asyncMock"
import React, { useEffect, useState } from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const {idItem} = useParams()

    useEffect(()=>{
        getProduct(idItem)
            .then(respuesta => setProduct(respuesta))
    }, [idItem])


  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer