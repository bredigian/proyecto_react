import ItemQuantitySelector from "./ItemQuantitySelector"
import { Link } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md"

const Description = ({ data, goToCart, onAdd }) => {
  return (
    <>
      <div className="itemDetail-img">
        <img src={data.img} alt="" />
      </div>
      <div className="d-flex flex-column align-items-center gap-4">
        <p className="itemDetail-quantity m-0 text-center">
          Available quantity: {data.quantity}
        </p>
        <p className="itemDetail-name m-0">{data.name}</p>
        <p className="itemDetail-price m-0">${data.price}</p>
        {goToCart ? (
          <Link className="goToCart" to="/cart">
            Go to Cart <MdOutlineShoppingCart />
          </Link>
        ) : (
          <ItemQuantitySelector onAdd={onAdd} initial={1} data={data} />
        )}
      </div>
    </>
  )
}
export default Description
