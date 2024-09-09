import Counter from "../Counter/Counter"
import "./ItemDetail.css"

const ItemDetail = ({nombre, precio, img}) => {

  return (
    <div className='detailContainer'>
    <div className='imgContainer'>
        <img src={img} alt={nombre}/>
    </div>
    <article className='detailInfo'>
        <h2>{nombre}</h2>
        <p>Sillón realizado artesanalmente con sistema de resortes y placa soft de alta densidad en su interior.</p>
        <p><strong>Medidas: </strong>2.00×0.90×0.90m  //  3.00×0.90×0.90m</p>
        <p><strong>Tapizados: </strong>A elección del cliente. Cuero vacuno / Simil cuero/ Chenille / Pana / Géneros 100% algodón / Cuero curtido al vegetal</p>
        <p><strong>Terminaciones: </strong>Lustre natural o patinado. Tachas a elección</p>
        <p className='price'>${precio}</p>
        <div className="buyContainer">
          <Counter/>  
          <button className="btnBuy">Agregar al carrito</button>
        </div>
    </article>
    </div>
  )
}

export default ItemDetail