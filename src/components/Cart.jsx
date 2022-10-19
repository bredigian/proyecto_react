import { useContext, useRef } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import { useEffect, useState } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore"
import Loading from "./Loading"
import { useForm } from "react-hook-form"
const Cart = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext)
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const checkout = (data) => {
    const order = {
      buyer: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        timeDay: new Date().toDateString(),
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
      console.log(`Order ${id} created.`)
    )
    clearCart()
  }
  const handleShowForm = () => {
    setShowForm(!showForm)
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
                <CartItem key={product.id} product={product} />
              ))}
            </div>
            <div className="cart-info d-flex align-items-center justify-content-center gap-5 w-100">
              <p className="cart-info__total m-0">TOTAL ${totalPrice()}</p>
              <button
                onClick={() => handleShowForm()}
                className="cart-info__buttonCheckout"
              >
                Checkout
              </button>
            </div>
            <div
              className={`cart-checkout ${
                showForm && "checkoutShow"
              } d-flex flex-column align-items-center p-4 gap-5 w-50`}
            >
              <p className="m-0 cart-checkout__title">
                Please, complete the next form
              </p>
              <form
                onSubmit={handleSubmit(checkout)}
                className="cart-checkout__form d-flex flex-column align-items-center gap-4"
              >
                <div className="cart-checkout__form-input d-flex flex-column align-items-start">
                  <label>Name</label>
                  <input
                    type="text"
                    {...register("name", {
                      required: true,
                    })}
                  />
                  {errors.name?.type === "required" && (
                    <p className="inputTextError">Invalid name</p>
                  )}
                </div>
                <div className="cart-checkout__form-input d-flex flex-column align-items-start">
                  <label>Phone</label>
                  <input
                    type="tel"
                    {...register("phone", {
                      required: true,
                    })}
                  />
                  {errors.phone?.type === "required" && (
                    <p className="inputTextError">Invalid phone</p>
                  )}
                </div>
                <div className="cart-checkout__form-input d-flex flex-column align-items-start">
                  <label>Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                    })}
                  />
                  {errors.email?.type === "required" && (
                    <p className="inputTextError">Invalid email</p>
                  )}
                </div>
                <input
                  type="submit"
                  value="Checkout"
                  className="buttonCheckout"
                />
              </form>
            </div>
          </div>
        </>
      )
    }
  } else {
    return <Loading />
  }
}
export default Cart
