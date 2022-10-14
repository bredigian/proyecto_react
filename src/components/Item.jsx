import ButtonItemMoreDetails from "./ButtonItemMoreDetails"
const Item = (props) => {
  if (props.itemStock > 0) {
    return (
      <li className="items-container__list-container__item d-flex flex-column align-items-center justify-content-center gap-5 p-4">
        <ButtonItemMoreDetails
          itemCategory={props.itemCategory}
          itemId={props.itemId}
        />
        <div className="items-container__list-container__item-img">
          <img src={`/img/products/${props.itemImg}`} alt="" />
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
      <li className="noStock items-container__list-container__item d-flex flex-column align-items-center justify-content-center gap-5 p-4">
        <ButtonItemMoreDetails />
        <div className="items-container__list-container__item-img">
          <img src={`/img/products/${props.itemImg}`} alt="" />
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
