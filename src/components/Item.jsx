import { AiOutlineInfoCircle } from "react-icons/ai"
import { NavLink } from "react-router-dom"

const Item = (props) => {
  if (props.itemStock > 0) {
    return (
      <li className="items-container__list-container__item d-flex flex-column align-items-center justify-content-between gap-5 p-4">
        <button className="buttonItemMoreDetails pe-4 ">
          <NavLink
            className="navLink"
            to={`/products/${props.itemCategory}/${props.itemId}`}
          >
            <AiOutlineInfoCircle />
          </NavLink>
        </button>
        <div className="items-container__list-container__item-img">
          <img src={props.itemImg} alt="" />
        </div>
        <p className="items-container__list-container__item-name m-0">
          {props.itemName}
        </p>
        <p className="items-container__list-container__item-price m-0">
          ${props.itemPrice}
        </p>
      </li>
    )
  } else {
    return (
      <li className="noStock items-container__list-container__item d-flex flex-column align-items-center justify-content-between gap-5 p-4">
        <button className="buttonItemMoreDetails pe-4 ">
          <NavLink
            className="navLink"
            to={`/products/${props.itemCategory}/${props.itemId}`}
          >
            <AiOutlineInfoCircle />
          </NavLink>
        </button>
        <div className="items-container__list-container__item-img">
          <img src={props.itemImg} alt="" />
        </div>
        <p className="items-container__list-container__item-name m-0">
          {props.itemName}
        </p>
        <p className="items-container__list-container__item-price m-0">
          ${props.itemPrice}
        </p>
      </li>
    )
  }
}
export default Item
