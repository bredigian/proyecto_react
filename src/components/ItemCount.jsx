import { useState } from "react"
import ButtonAddOnCart from "./ButtonAddOnCart"
const ItemCount = (props) => {
  const [cantInitial, setCant] = useState(props.initial)
  const [cantStock, setStock] = useState(props.stock)

  const onInc = () => {
    setCant(parseInt(cantInitial) + 1)
    setStock(parseInt(cantStock) - 1)
  }
  const onDec = () => {
    setCant(parseInt(cantInitial) - 1)
    setStock(parseInt(cantStock) + 1)
  }

  return (
    <div className="d-flex flex-column align-items-center gap-2 w-100">
      <div className="itemCount d-flex align-items-center justify-content-between p-4 w-100">
        <button disabled={cantInitial == 1} onClick={onDec}>
          -
        </button>
        <p className="itemCount-value m-0">{cantInitial}</p>
        <button disabled={cantStock <= 1} onClick={onInc}>
          +
        </button>
      </div>
      <ButtonAddOnCart
        onAdd={props.onAdd}
        cant={cantInitial}
        nameItem={props.nameItem}
      />
    </div>
  )
}
export default ItemCount
