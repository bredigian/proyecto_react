import { useState } from "react"
import AddItemButton from "./AddItemButton"
const ItemQuantitySelector = ({ onAdd, data, initial }) => {
  const [cantInitial, setCant] = useState(initial)
  const [cantStock, setStock] = useState(data.stock)

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
      <div className="itemCount d-flex align-items-center justify-content-center gap-5 p-4 w-100">
        <button disabled={cantInitial == 1} onClick={onDec}>
          -
        </button>
        <p className="itemCount-value m-0">{cantInitial}</p>
        <button disabled={cantStock <= 1} onClick={onInc}>
          +
        </button>
      </div>
      <AddItemButton onAdd={onAdd} quantity={cantInitial} />
    </div>
  )
}
export default ItemQuantitySelector
