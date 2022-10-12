import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import { useEffect, useState } from "react"
import Loading from "./Loading"
const Cart = () => {
  const { cart, totalPrice } = useContext(CartContext)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 1500)
  })
  if (loading) {
    if (cart.length == 0) {
      return (
        <div className="cartEmpty d-flex flex-column align-items-center w-75 gap-3 p-4">
          <p className="cartEmpty-title m-0">Cart empty!</p>
          <Link className="cartEmpty-link" to="/products">
            Go to shop
          </Link>
        </div>
      )
    } else {
      return (
        <>
          <div className="cart d-flex flex-column align-items-center gap-5 w-100 p-4">
            <div className="cart-container d-flex flex-column align-items-center gap-5 w-100">
              {cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
            <p className="cart-total m-0">TOTAL ${totalPrice()}</p>
          </div>
        </>
      )
    }
  } else {
    return <Loading />
  }
}
export default Cart
