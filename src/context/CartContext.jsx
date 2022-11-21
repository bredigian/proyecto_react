import React, { useEffect, useState } from "react"

export const CartContext = React.createContext([])
const CartProvider = ({ children }) => {
  const getInitialState = () => {
    const cartLocalStorage = localStorage.getItem("cart")
    return cartLocalStorage ? JSON.parse(cartLocalStorage) : []
  }
  const [cart, setCart] = useState(getInitialState)
  const addToCart = (data, quantity) => {
    if (isInCart(data.id)) {
      setCart(
        cart.map((product) => {
          return product.id === data.id
            ? { ...product, quantity: product.quantity + quantity }
            : product
        })
      )
    } else {
      setCart([...cart, { ...data, quantity }])
    }
  }
  const isInCart = (id) => {
    return cart.find((product) => product.id === id) ? true : false
  }

  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
  }

  const totalProducts = () => {
    return cart.reduce(
      (cantProducts, product) => cantProducts + product.quantity,
      0
    )
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  return (
    <CartContext.Provider
      value={{
        addToCart,
        isInCart,
        removeProduct,
        clearCart,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
