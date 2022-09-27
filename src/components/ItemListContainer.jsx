import Item from "./Item"
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
const ItemListContainer = (props) => {
  const url =
    "https://docs.google.com/spreadsheets/d/1-kU-A3pcSrB8kwsB_44ydSp0b87xCNzNpTWIHMnh6Dc/gviz/tq"
  const [items, setItems] = useState([])
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.text())
        .then((response) => {
          const data = JSON.parse(response.substring(47).slice(0, -2))
          setItems(data.table.rows)
        })
        .catch((err) => console.log(err))
    }, 2000)
  }, [])
  const itemsType = []
  items.forEach((element) => {
    if (!itemsType.includes(element.c[1].v)) {
      itemsType.push(element.c[1].v)
    }
  })
  return (
    <div className="items d-flex flex-column align-items-center p-4 gap-4">
      <p className="items-title m-0">{props.title}</p>
      <div className="items-container w-100 d-flex flex-column align-items-start gap-4">
        {itemsType.map((type) => (
          <ItemList
            key={type}
            data={items.filter((item) => item.c[1].v === type)}
            category={type}
          />
        ))}
      </div>
    </div>
  )
}
export default ItemListContainer
