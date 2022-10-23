import { MdOutlineAddShoppingCart } from "react-icons/md"
const AddItemButton = ({ onAdd, quantity }) => {
  return (
    <button
      onClick={() => onAdd(quantity)}
      className="buttonAddOnCart d-flex flex-row align-items-center gap-3"
    >
      <p className="m-0">Add to cart</p>
      <MdOutlineAddShoppingCart />
    </button>
  )
}
export default AddItemButton
