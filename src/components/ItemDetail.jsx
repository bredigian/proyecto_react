import "react-toastify/dist/ReactToastify.css"

import ButtonBackTo from "./ButtonBackTo"
import { CartContext } from "../context/CartContext"
import Description from "./Description"
import { toast } from "react-toastify"
import { useContext } from "react"
import { useState } from "react"

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
        toRoute={`/products/${data.category}`}
        title={data.categoryId}
      />
      <div className="itemDetail d-flex  align-items-center justify-content-around p-5">
        <Description data={data} goToCart={goToCart} onAdd={onAdd} />
      </div>
    </>
  )
}

export default ItemDetail
