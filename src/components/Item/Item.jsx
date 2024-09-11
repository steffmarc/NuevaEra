import "./Item.css"
import { Link } from 'react-router-dom';

const Item = ({id, img, nombre}) => {
  return (
    <div className='productCard'>
        <img src={img} alt={nombre}/>
        <Link to={`/item/${id}`}><h3>{nombre}</h3></Link>
    </div>
  )
}

export default Item