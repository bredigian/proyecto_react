import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { useEffect } from "react"
const NavBar = ({ isBurgerMenu }) => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const db = getFirestore()
    const categoriesCollection = collection(db, "categories")
    getDocs(categoriesCollection).then((snapshot) => {
      setCategories(snapshot.docs.map((doc) => doc.data().name))
    })
  }, [])
  return (
    <nav
      className={
        isBurgerMenu
          ? "showBurgerMenu navbar d-flex align-items-end gap-5"
          : "navbar d-flex align-items-end gap-5"
      }
    >
      <li>
        <NavLink className="link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/products">
          Products
        </NavLink>
        <ul className="d-flex flex-column align-items-start">
          {categories.map((cat) => (
            <li key={cat}>
              <NavLink className="link" to={`/products/${cat}`}>
                {cat}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
      <CartWidget />
    </nav>
  )
}
export default NavBar
