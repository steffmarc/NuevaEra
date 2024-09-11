import Counter from "../Counter/Counter"
import "./ItemDetail.css"

const ItemDetail = ({nombre, precio, img, descripcion, medidas, tapizados, terminaciones, material, color}) => {

  return (
    <div className='detailContainer'>
    <div className='imgContainer'>
        <img src={img} alt={nombre}/>
    </div>
    <article className='detailInfo'>
        <div>
        <h2>{nombre}</h2>
        {descripcion && <p>{descripcion}</p>}
        {medidas && <p><strong>Medidas: </strong>{medidas}</p>}
        {tapizados && <p><strong>Tapizados: </strong>{tapizados}</p>}
        {material && <p><strong>Material: </strong>{material}</p>}
        {terminaciones && <p><strong>Terminaciones: </strong>{terminaciones}</p>}
        {color && <p><strong>Color: </strong>{color}</p>}
        <p className='price'><strong>Precio: </strong>${precio}</p>
        </div>
        <div className="buyContainer">
          <Counter/>  
          <button className="btnBuy">Agregar al carrito</button>
        </div>
    </article>
    </div>
  )
}

export default ItemDetail