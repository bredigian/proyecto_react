import { MdOutlineAddShoppingCart } from "react-icons/md"
const ButtonAddOnCart = (props) => {
  console.log(props)
  return (
    <button
      onClick={() => props.onAdd(props.quantity)}
      className="buttonAddOnCart d-flex flex-row align-items-center gap-3"
    >
      <p className="m-0">Add to cart</p>
      <MdOutlineAddShoppingCart />
    </button>
  )
}
export default ButtonAddOnCart
