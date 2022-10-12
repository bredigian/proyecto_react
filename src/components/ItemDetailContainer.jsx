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
  return (
    <>
      {loading ? (
        item.map((i) => (
          <ItemDetail
            key={i.c[5].v}
            id={i.c[5].v}
            name={i.c[0].v}
            category={i.c[1].v}
            initial={1}
            stock={i.c[2].v}
            price={i.c[3].v}
            img={i.c[4].v}
          />
        ))
      ) : (
        <Loading />
      )}
    </>
  )
}
export default ItemDetailContainer
