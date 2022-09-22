import Item from "./Item"
const ItemListContainer = (props) => {
  return (
    <div className="items d-flex flex-column align-items-center p-4 gap-4">
      <p className="items-title m-0">{props.title}</p>
      <div className="items-container w-100 d-flex flex-row align-items-end justify-content-start gap-4">
        <Item
          nameItem="Logitech G203"
          img="./img/products/mouse/g203Black.png"
          stock="10"
          initial="1"
        />
        <Item
          nameItem="T-DAGGER Bora White"
          img="./img/products/keyboard/t-daggerBoraWhite.png"
          stock="5"
          initial="1"
        />
      </div>
    </div>
  )
}
export default ItemListContainer
