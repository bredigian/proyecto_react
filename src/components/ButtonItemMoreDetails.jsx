import { AiOutlineInfoCircle } from "react-icons/ai"
import { NavLink } from "react-router-dom"
const ButtonItemMoreDetails = (props) => {
  console.log()
  return (
    <button className="buttonItemMoreDetails pe-4 ">
      <NavLink
        className="navLink"
        to={`/products/${props.itemCategory}/${props.itemId}`}
      >
        <AiOutlineInfoCircle />
      </NavLink>
    </button>
  )
}
export default ButtonItemMoreDetails
