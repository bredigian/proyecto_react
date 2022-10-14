import ItemCount from "./ItemCount"
import ButtonBackTo from "./ButtonBackTo"
import { useState } from "react"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md"
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
        <div className="itemDetail-img">
          <img src={`/img/products/${data.img}`} alt="" />
        </div>
        <div className="d-flex flex-column align-items-center gap-4">
          <p className="itemDetail-quantity m-0 text-center">
            Available quantity: {data.stock}
          </p>
          <p className="itemDetail-name m-0">{data.name}</p>
          <p className="itemDetail-price m-0">${data.price}</p>
          {goToCart ? (
            <Link className="goToCart" to="/cart">
              Go to Cart <MdOutlineShoppingCart />
            </Link>
          ) : (
            <ItemCount onAdd={onAdd} initial={1} data={data} />
          )}
        </div>
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
