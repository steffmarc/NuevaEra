import "./ItemListContainer.css"
import {useState, useEffect} from "react"
import { getLiving } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import Categories from "../Categories/Categories"

const ItemListContainer = () => {

  const [living, setLiving] = useState([])

  useEffect( ()=>{
    getLiving()
    .then(respuesta => setLiving(respuesta))
    .catch(error => console.log(error))

}, [])

  return (
    <>
    <Categories/>
    <h2>Estilo y confort para tu Living</h2>
    <p className="subtitle">Descubrí nuestra selección de muebles diseñados para hacer de tu living un espacio acogedor y elegante. Combina estilo y funcionalidad para crear un ambiente que refleje tu personalidad y se adapte a tus momentos de descanso y convivencia.</p>
    <ItemList living={living}/>
    </>
  )
}

export default ItemListContainer