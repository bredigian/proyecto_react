import ButtonBackTo from "./ButtonBackTo"
import Item from "./Item"
import { NavLink } from "react-router-dom"

const ItemList = ({ data, category, onlyCat }) => {
  if (onlyCat) {
    return (
      <>
        <ul className="items-container__list-container d-flex flex-row align-items-center gap-4">
          {data.map((item) => (
            <Item
              key={item.id}
              itemId={item.id}
              itemName={item.name}
              itemCategory={item.category}
              itemStock={item.quantity}
              itemPrice={item.price}
              itemImg={item.img}
              itemInitial="1"
            />
          ))}
        </ul>
        <ButtonBackTo toRoute="/products" title="Products" />
      </>
    )
  } else {
    return (
      <div className="items-container__list d-flex flex-row align-items-center p-4 gap-4">
        <p className="items-container__list-title m-0 text-center">
          <NavLink className="navLink" to={`/products/${category}`}>
            {category}
          </NavLink>
        </p>
        <ul className="items-container__list-container d-flex flex-row align-items-center gap-4">
          {data.map((item) => (
            <Item
              key={item.id}
              itemId={item.id}
              itemName={item.name}
              itemCategory={item.category}
              itemStock={item.quantity}
              itemPrice={item.price}
              itemImg={item.img}
              itemInitial="1"
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default ItemList
