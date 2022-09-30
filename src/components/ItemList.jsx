import { NavLink } from "react-router-dom"
import Item from "./Item"
import ButtonBackTo from "./ButtonBackTo"
const ItemList = (props) => {
  if (props.onlyCat) {
    return (
      <>
        <ul className="items-container__list-container d-flex flex-row align-items-center gap-4">
          {props.data.map((item) => (
            <Item
              key={item.c[5].v}
              itemId={item.c[5].v}
              itemName={item.c[0].v}
              itemCategory={item.c[1].v}
              itemStock={item.c[2].v}
              itemPrice={item.c[3].v}
              itemImg={item.c[4].v}
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
          <NavLink className="navLink" to={`/products/${props.category}`}>
            {props.category}
          </NavLink>
        </p>
        <ul className="items-container__list-container d-flex flex-row align-items-center gap-4">
          {props.data.map((item) => (
            <Item
              key={item.c[5].v}
              itemId={item.c[5].v}
              itemName={item.c[0].v}
              itemCategory={item.c[1].v}
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
}
export default ItemList
