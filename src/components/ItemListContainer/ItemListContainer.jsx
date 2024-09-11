import "./ItemListContainer.css"
import {useState, useEffect} from "react"
import { getProducts, getProductByCat } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

  const [products, setProducts] = useState([])

  const {idCategory} = useParams()

  useEffect( ()=>{
    const productFunction = idCategory ? getProductByCat : getProducts;

    productFunction(idCategory)
    .then(res => setProducts(res))

}, [idCategory])

  return (
    <>
    <h2>Estilo y confort para tu casa</h2>
    <p className="subtitle">Descubrí nuestra selección de muebles diseñados para hacer de tu casa un espacio acogedor y elegante. Combina estilo y funcionalidad para crear un ambiente que refleje tu personalidad y se adapte a tus momentos de descanso y convivencia.</p>
    <ItemList products={products}/>
    </>
  )
}

export default ItemListContainer