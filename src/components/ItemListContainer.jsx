import Item from "./Item"
const ItemListContainer = (props) => {
  return (
    <div className="items d-flex flex-column align-items-center p-4 gap-4">
      <p className="items-title m-0">{props.title}</p>
      <div className="items-container d-flex flex-row align-items-end">
        <Item
          nameItem="Logitech G203"
          img="./img/products/mouse/g203Black.png"
        />
      </div>
    </div>
  )
}
export default ItemListContainer
