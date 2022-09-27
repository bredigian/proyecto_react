import ItemCount from "./ItemCount"
import ButtonAddOnCart from "./ButtonAddOnCart"
const Item = (props) => {
  if (props.itemStock > 0) {
    return (
      <li className="items-container__list-item d-flex flex-column align-items-center justify-content-between gap-3 p-4">
        <ButtonAddOnCart />
        <div className="items-container__list-item__img">
          <img src={props.itemImg} alt="" />
        </div>
        <p className="items-container__list-item__name m-0">{props.itemName}</p>
        <p className="items-container__list-item__price m-0">
          ${props.itemPrice}
        </p>
        <ItemCount stock={props.itemStock} initial={props.itemInitial} />
      </li>
    )
  } else {
    return (
      <li className="noStock items-container__list-item d-flex flex-column align-items-center justify-content-between gap-3 p-4">
        <ButtonAddOnCart />
        <div className="items-container__list-item__img">
          <img src={props.itemImg} alt="" />
        </div>
        <p className="items-container__list-item__name m-0">{props.itemName}</p>
        <p className="items-container__list-item__price m-0">
          ${props.itemPrice}
        </p>
        <ItemCount stock={props.itemStock} initial={props.itemInitial} />
      </li>
    )
  }
}
export default Item
