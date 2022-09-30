import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
const ItemListContainer = (props) => {
  const url =
    "https://docs.google.com/spreadsheets/d/1-kU-A3pcSrB8kwsB_44ydSp0b87xCNzNpTWIHMnh6Dc/gviz/tq"
  const [items, setItems] = useState([])
  const { category } = useParams()
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.text())
        .then((response) => {
          const data = JSON.parse(response.substring(47).slice(0, -2))
          if (category) {
            setItems(data.table.rows.filter((item) => item.c[1].v === category))
          } else {
            setItems(data.table.rows)
          }
        })
        .catch((err) => console.log(err))
    }, 500)
  }, [category])
  let title
  category ? (title = category) : (title = props.title)
  const itemsType = []
  items.forEach((element) => {
    if (!itemsType.includes(element.c[1].v)) {
      itemsType.push(element.c[1].v)
    }
  })
  return (
    <div className="items d-flex flex-column align-items-center p-4 gap-4">
      <p className="items-title m-5">{title}</p>
      <div className="items-container w-100 d-flex flex-column align-items-start gap-4">
        {itemsType.map((type) => (
          <ItemList
            key={type}
            data={items.filter((item) => item.c[1].v === type)}
            category={type}
            onlyCat={category}
          />
        ))}
      </div>
    </div>
  )
}
export default ItemListContainer
