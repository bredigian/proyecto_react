import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"

import { AuthContext } from "../context/AuthContext"
import Brief from "./Brief"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import Loading from "./Loading"
import SubmitLoader from "./SubmitLoader"
import Swal from "sweetalert2"
import { useContext } from "react"
import withReactContent from "sweetalert2-react-content"

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext)
  const { userData } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const MySwal = withReactContent(Swal)
  const checkout = () => {
    setCheckoutLoading(true)
    const order = {
      buyer: {
        name: `${userData.firstName} ${userData.lastName}`,
        phone: userData.phone,
        email: userData.email,
        day: new Date().toDateString(),
        dayTime: new Date().toLocaleTimeString(),
        status: "generated",
      },
      items: cart.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      })),
      total: totalPrice(),
    }
    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order).then(({ id }) =>
      MySwal.fire({
        title: `Order ${id} created successfully!`,
        color: "#000000",
        icon: "success",
        iconColor: "#000000",
        confirmButtonColor: "#000000",
      })
    )
    setTimeout(() => {
      clearCart()
    }, 1500)
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 1500)
  }, [])
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
                <Brief key={product.id} product={product} />
              ))}
            </div>
            <div className="cart-info d-flex align-items-center justify-content-center gap-5 w-100">
              <p className="cart-info__total m-0">TOTAL ${totalPrice()}</p>
              <button
                onClick={() => checkout()}
                className="cart-info__buttonCheckout"
              >
                {checkoutLoading ? <SubmitLoader /> : "Checkout"}
              </button>
            </div>
          </div>
        </>
      )
    }
  } else {
    return <Loading />
  }
}
export default Checkout
