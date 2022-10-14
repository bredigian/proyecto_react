import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loading from "./Loading"
import { getFirestore, doc, getDoc } from "firebase/firestore"
const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false)
  const { itemId } = useParams()
  const [item, setItem] = useState([])
  useEffect(() => {
    const db = getFirestore()
    const queryDoc = doc(db, "items", itemId)
    getDoc(queryDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() })
    })
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  }, [])
  return <>{loading ? <ItemDetail key={item.id} data={item} /> : <Loading />}</>
}
export default ItemDetailContainer
