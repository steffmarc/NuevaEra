import { useState, createContext } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  totalAmount: 0,
})

export const CartProvider = ({children}) => {
  const [ cart, setCart ] = useState ([])
  const [ total, setTotal ] = useState (0)
  const [ totalAmount, setTotalAmount ] = useState (0)


  const addToCart = (item, cantidad) =>{
    const isInCart = cart.find(prod => prod.item.id === item.id)

    if(!isInCart){
      setCart(prev => [...prev, {item, cantidad}])
      setTotal(prev => prev + (item.precio * cantidad))
      setTotalAmount(prev => prev + cantidad)
    } else {
      const updatedCart = cart.map ( prod => {
        if(prod.item.id === item.id){
          return {...prod, cantidad: prod.cantidad + cantidad}
        } else {
          return prod
        }
      })
      setCart(updatedCart)
      setTotal(prev => prev + (item.precio * cantidad))
      setTotalAmount(prev => prev + cantidad)
    }
  } 

  const deleteProduct = (id) => {
    const deletedProduct = cart.find(prod => prod.item.id === id)
    const updatedCart = cart.filter(prod => prod.item.id !== id)

    setCart(updatedCart)
    setTotalAmount(prev => prev - deleteProduct.cantidad)
    setTotal(prev => prev - (deleteProduct.item.precio * deleteProduct.cantidad))
  }

  const emptyCart = () => {
    setCart([])
    setTotal(0)
    setTotalAmount(0)
  }

  return(
    <CartContext.Provider value={{cart, total, totalAmount, addToCart, deleteProduct, emptyCart}}>
        {children}
    </CartContext.Provider>
  )
    
}


