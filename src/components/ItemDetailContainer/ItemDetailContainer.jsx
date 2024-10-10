import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../services/config'
import {getDoc, doc} from 'firebase/firestore'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from 'react-spinners';

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true);
  const {idItem} = useParams()

useEffect(()=>{
  setLoading(true);

  const nuevoDoc = doc(db, "productos", idItem)

  getDoc(nuevoDoc)
    .then(res => {
      const data = res.data();
      const nuevosProducto = {id: res.id,...data}
      setProducto(nuevosProducto)
    })
    .catch(error => {
      toast.error("Error al obtener el producto: " + error.message);
    })
    .finally(() => {
      setLoading(false);
    });
}, [idItem])  


return (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <ToastContainer />
    {loading ? (
      <ClipLoader color={"#4f46e5"} loading={loading} size={50} />
    ) : (
      producto ? <ItemDetail {...producto} /> : <p>Hubo un pequeño problema al cargar el producto, por favor volvé a recargar la página</p>
    )}
  </div>
);

}


export default ItemDetailContainer