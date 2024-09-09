import "./Item.css"

const Item = ({img, nombre, precio, children}) => {
  return (
    <div className='productCard'>
        <img src={img} alt={nombre}/>
        <h3>{nombre}</h3>
        {/* <p>${precio}</p> */}
    </div>
  )
}

export default Item