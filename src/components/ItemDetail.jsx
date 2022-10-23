import ButtonBackTo from "./ButtonBackTo"
import Description from "./Description"
import { useState } from "react"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false)
  const { addToCart } = useContext(CartContext)
  const onAdd = (quantity) => {
    setGoToCart(true)
    addToCart(data, quantity)
    toast.success("Added to cart successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }
  return (
    <>
      <ButtonBackTo
        toRoute={`/products/${data.categoryId}`}
        title={data.categoryId}
      />
      <div className="itemDetail d-flex  align-items-center justify-content-around p-5">
        <Description data={data} goToCart={goToCart} onAdd={onAdd} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default ItemDetail
