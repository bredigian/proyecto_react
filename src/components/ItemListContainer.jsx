import { useState, useEffect } from "react"
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loading from "./Loading"
const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])
  const { category } = useParams()
  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, "items")
    if (category) {
      const queryCategory = query(
        queryCollection,
        where("categoryId", "==", category)
      )
      getDocs(queryCategory).then((snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
    } else {
      getDocs(queryCollection).then((snapshot) => {
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
    }
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  }, [category])
  let title
  {
    category ? (title = category) : (title = props.title)
  }
  let itemsCategories = []
  items.forEach((item) => {
    {
      !itemsCategories.includes(item.categoryId) &&
        itemsCategories.push(item.categoryId)
    }
  })
  return (
    <>
      {loading ? (
        <div className="items d-flex flex-column align-items-center p-4 gap-4">
          <p className="items-title m-5">{title}</p>
          <div className="items-container w-100 d-flex flex-column align-items-start gap-4">
            {itemsCategories.map((cat) => (
              <ItemList
                key={cat}
                data={items.filter((i) => i.categoryId == cat)}
                category={cat}
                onlyCat={category}
              />
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}
export default ItemListContainer
