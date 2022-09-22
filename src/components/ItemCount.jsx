import { useState } from "react"
const ItemCount = (props) => {
  const [cantInitial, setCant] = useState(props.initial)
  const [cantStock, setStock] = useState(props.stock)

  const onInc = () => {
    if (parseInt(cantStock) > 1) {
      setCant(parseInt(cantInitial) + 1)
      setStock(parseInt(cantStock) - 1)
    }
  }
  const onDec = () => {
    if (parseInt(cantInitial) > 1) {
      setCant(parseInt(cantInitial) - 1)
      setStock(parseInt(cantStock) + 1)
    }
  }

  return (
    <div className="items-container__item-counter d-flex align-items-center justify-content-between p-4 w-100">
      <button onClick={onDec}>-</button>
      <p className="items-container__item-counter__value m-0">{cantInitial}</p>
      <button onClick={onInc}>+</button>
    </div>
  )
}
export default ItemCount
