import ItemCount from "./ItemCount"
import ButtonBackTo from "./ButtonBackTo"
import { useState } from "react"
import { Link } from "react-router-dom"
const ItemDetail = (props) => {
  const [goToCart, setGoToCart] = useState(false)
  const onAdd = (quantity, nameItem) => {
    setGoToCart(true)
    console.log(`Se cargaron ${quantity} ${nameItem} al carrito.`)
  }
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
          <p className="itemDetail-name m-0">{props.itemName}</p>
          <p className="itemDetail-price m-0">${props.itemPrice}</p>
          {goToCart ? (
            <Link to="/cart">Go to Cart</Link>
          ) : (
            <ItemCount
              onAdd={onAdd}
              stock={props.itemStock}
              initial={props.itemInitial}
              nameItem={props.itemName}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default ItemDetail
