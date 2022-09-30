import { NavLink } from "react-router-dom"
import { RiArrowGoBackLine } from "react-icons/ri"
const ButtonBackTo = (props) => {
  return (
    <button className="backToCategory d-flex flex-column align-items-center gap-2 p-4">
      <NavLink className="navLink" to={`${props.toRoute}`}>
        <RiArrowGoBackLine />
        <p className="m-0 text-center">Back to {props.title}</p>
      </NavLink>
    </button>
  )
}
export default ButtonBackTo
