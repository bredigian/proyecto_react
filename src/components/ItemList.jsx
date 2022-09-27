import axios from "axios"
import Item from "./Item"
const ItemList = (props) => {
  return (
    <div className="items-container__list d-flex flex-row align-items-center p-4 gap-4">
      <p className="items-container__list-title m-0 text-center">
        {props.category}
      </p>
      <ul className="d-flex flex-row align-items-center gap-4">
        {props.data.map((item) => (
          <Item
            key={item.c[5].v}
            itemName={item.c[0].v}
            itemStock={item.c[2].v}
            itemPrice={item.c[3].v}
            itemImg={item.c[4].v}
            itemInitial="1"
          />
        ))}
      </ul>
    </div>
  )
}
export default ItemList
