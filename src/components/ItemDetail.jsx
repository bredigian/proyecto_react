import ItemCount from "./ItemCount"
import ButtonAddOnCart from "./ButtonAddOnCart"
import ButtonBackTo from "./ButtonBackTo"
const ItemDetail = (props) => {
  return (
    <>
      <ButtonBackTo
        toRoute={`/products/${props.itemType}`}
        title={props.itemType}
      />
      <div className="itemDetail d-flex  align-items-center justify-content-around p-5">
        <div className="itemDetail-img">
          <img src={props.itemImg} alt="" />
        </div>
        <div className="d-flex flex-column align-items-center gap-4">
          <ButtonAddOnCart />
          <p className="itemDetail-name m-0">{props.itemName}</p>
          <p className="itemDetail-price m-0">${props.itemPrice}</p>
          <ItemCount stock={props.itemStock} initial={props.itemInitial} />
        </div>
      </div>
    </>
  )
}

export default ItemDetail
