import ItemCount from "./ItemCount"
import ButtonAddOnCart from "./ButtonAddOnCart"
const Item = (props) => {
  return (
    <div className="items-container__item d-flex flex-column align-items-center justify-content-between gap-3 p-4">
      <ButtonAddOnCart />
      <div className="items-container__item-img">
        <img src={props.img} alt="" />
      </div>
      <p className="items-container__item-name m-0">{props.nameItem}</p>
      <ItemCount stock={props.stock} initial={props.initial} />
    </div>
  )
}
export default Item
