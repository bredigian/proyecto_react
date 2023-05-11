import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore"
import { getDownloadURL, getStorage, ref } from "firebase/storage"
import { useEffect, useState } from "react"

import ItemList from "./ItemList"
import Loading from "./Loading"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])
  const { category } = useParams()

  const fetchItems = async (categoryId) => {
    const db = getFirestore()
    const storage = getStorage()
    let productDocs
    if (categoryId !== null) {
      const queryCategory = query(
        collection(db, "products"),
        where("category", "==", categoryId)
      )
      productDocs = await getDocs(queryCategory)
    } else {
      const queryDocs = query(collection(db, "products"))
      productDocs = await getDocs(queryDocs)
    }
    const updatedProducts = Promise.all(
      productDocs?.docs.map(async (doc) => {
        const product = { id: doc.id, ...doc.data() }
        const imgUrlRef = ref(storage, `products/${doc.id}`)
        const imgUrl = await getDownloadURL(imgUrlRef)
        return { ...product, img: imgUrl }
      })
    )
    setItems(await updatedProducts)
  }

  useEffect(() => {
    if (category) {
      fetchItems(category)
    } else {
      fetchItems(null)
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
  items?.forEach((item) => {
    {
      !itemsCategories.includes(item.category) &&
        itemsCategories.push(item.category)
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
                data={items.filter((i) => i.category === cat)}
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
