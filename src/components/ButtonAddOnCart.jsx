import { MdOutlineAddShoppingCart } from "react-icons/md"
const ButtonAddOnCart = (props) => {
  return (
    <button
      onClick={() => props.onAdd(props.cant, props.nameItem)}
      className="buttonAddOnCart d-flex flex-row align-items-center gap-3"
    >
      <p className="m-0">Add to cart</p>
      <MdOutlineAddShoppingCart />
    </button>
  )
}
export default ButtonAddOnCart
