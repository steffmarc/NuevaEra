import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({living}) => {
  return (
    <div className='productContainer'>
        {living.map(item => (
        <Item key={item.id} {...item}>
        </Item>
      ))}
    </div>
  )
}

export default ItemList