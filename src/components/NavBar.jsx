import { NavLink, useNavigate } from "react-router-dom"
import { collection, getDocs, getFirestore } from "firebase/firestore"

import { AuthContext } from "../context/AuthContext"
import CartWidget from "./CartWidget"
import GetWindowSize from "../functions/GetWindowSize"
import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"

const NavBar = ({ isBurgerMenu }) => {
  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const { userCurrent, logOut, userData } = useContext(AuthContext)
  const [windowSize, setWindowSize] = useState(GetWindowSize())
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(GetWindowSize())
    }
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])
  const handleLogout = () => {
    logOut()
    navigate("/")
  }
  useEffect(() => {
    const db = getFirestore()
    const categoriesCollection = collection(db, "categories")
    getDocs(categoriesCollection).then((snapshot) => {
      setCategories(snapshot.docs.map((doc) => doc.data().name))
    })
    setTimeout(() => {
      const navbar = document.getElementById("navbar")
      navbar.classList.remove("navbar-loading")
    }, 2500)
  }, [])
  return (
    <nav
      className={
        isBurgerMenu
          ? "showBurgerMenu navbar d-flex align-items-end gap-5"
          : "navbar navbar-loading d-flex align-items-end gap-5"
      }
      id="navbar"
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
      {userCurrent ? (
        <>
          <li>
            {windowSize.innerWidth > 768 && `${userData.firstName}`}
            <ul className="d-flex flex-column align-items-start">
              <CartWidget />
              <li onClick={handleLogout}>
                <NavLink to={"/"} className="link">
                  Log Out
                </NavLink>
              </li>
            </ul>
          </li>
        </>
      ) : (
        <li>
          <NavLink to={"/signin"} className="link">
            Sign In
          </NavLink>
        </li>
      )}
    </nav>
  )
}
export default NavBar
