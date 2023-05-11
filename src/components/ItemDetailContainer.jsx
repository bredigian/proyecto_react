import { collection, doc, getDoc, getFirestore } from "firebase/firestore"
import { getDownloadURL, getStorage, ref } from "firebase/storage"

import ItemDetail from "./ItemDetail"
import Loading from "./Loading"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState } from "react"

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false)
  const { itemId } = useParams()
  const [item, setItem] = useState([])

  const fetchProduct = async (itemId) => {
    const db = getFirestore()
    const storage = getStorage()
    const queryDoc = doc(db, "products", itemId)
    const product = await getDoc(queryDoc)
    const productUpdated = { id: product.id, ...product.data() }
    const imgUrlRef = ref(storage, `products/${productUpdated.id}`)
    const imgUrl = await getDownloadURL(imgUrlRef)

    setItem({ ...productUpdated, img: imgUrl })
  }

  useEffect(() => {
    fetchProduct(itemId)
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  }, [])
  return <>{loading ? <ItemDetail key={item.id} data={item} /> : <Loading />}</>
}
export default ItemDetailContainer
