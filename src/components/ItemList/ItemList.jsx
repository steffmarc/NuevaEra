import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products}) => {
  return (
    <div className='productContainer'>
        {products.map(item => (
        <Item key={item.id} {...item}>
        </Item>
      ))}
    </div>
  )
}

export default ItemList