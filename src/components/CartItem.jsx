import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { MdOutlineRemoveShoppingCart } from "react-icons/md"
const CartItem = ({ product }) => {
  const { removeProduct } = useContext(CartContext)
  return (
    <div className="cart-container__item d-flex align-items-center justify-content-around gap-2 p-4 w-75">
      <div className="cart-container__item-img">
        <img src={`/img/products/${product.img}`} alt="" />
      </div>
      <div className="cart-container__item-info d-flex flex-column align-items-end gap-3">
        <p className="m-0">{product.name}</p>
        <p className="m-0">
          {product.quantity} x ${product.price}
        </p>
        <p className="subTotal m-0">${product.price * product.quantity}</p>
        <button
          className="removeItem d-flex flex-column align-items-center p-2"
          onClick={() => removeProduct(product.id)}
        >
          Delete
          <MdOutlineRemoveShoppingCart />
        </button>
      </div>
    </div>
  )
}
export default CartItem
