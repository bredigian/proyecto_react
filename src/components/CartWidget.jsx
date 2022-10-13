import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
const CartWidget = () => {
  const { totalProducts } = useContext(CartContext)
  return (
    <li>
      <Link className="link" to="/cart">
        <div className="cartWidget d-flex flex-row-reverse align-items-center gap-2">
          <p className="m-0 cartWidget-total">{totalProducts()}</p>
          <p className="m-0 cartWidget-title">Cart</p>
        </div>
      </Link>
    </li>
  )
}
export default CartWidget
