import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading"
const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false)
  const url =
    "https://docs.google.com/spreadsheets/d/1-kU-A3pcSrB8kwsB_44ydSp0b87xCNzNpTWIHMnh6Dc/gviz/tq"
  const { itemId } = useParams()
  const [item, setItem] = useState([])
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.text())
        .then((response) => {
          const data = JSON.parse(response.substring(47).slice(0, -2))
          setItem(data.table.rows.filter((i) => i.c[5].v == itemId))
          setLoading(true)
        })
        .catch((err) => console.log(err))
    }, 1500)
  }, [itemId])
  if (loading) {
    return (
      <>
        {item.map((i) => (
          <ItemDetail
            key={i.c[5].v}
            itemName={i.c[0].v}
            itemType={i.c[1].v}
            itemInitial="1"
            itemStock={i.c[2].v}
            itemPrice={i.c[3].v}
            itemImg={i.c[4].v}
          />
        ))}
      </>
    )
  } else {
    return <Loading />
  }
}
export default ItemDetailContainer