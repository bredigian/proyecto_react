import { CgMenu } from "react-icons/cg"
import NavBar from "./NavBar"
import GetWindowSize from "../functions/GetWindowSize"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const Header = () => {
  const [windowSize, setWindowSize] = useState(GetWindowSize())
  const [burgerMenu, setBurgerMenu] = useState(false)
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(GetWindowSize())
    }
    window.addEventListener("resize", handleWindowResize)
    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  }, [])
  const handleBurgerMenu = () => {
    setBurgerMenu(!burgerMenu)
  }
  return (
    <>
      {windowSize.innerWidth < 769 ? (
        <header className="header w-100">
          <div className="header-container d-flex align-items-center justify-content-between p-4 w-100">
            <Link to="/">
              <img
                className="headerIcon"
                src="https://i.ibb.co/Zcfzb2s/brgIcon.png"
                alt=""
              />
            </Link>
            <CgMenu
              onClick={() => handleBurgerMenu()}
              className="header-container__burgerIcon"
            />
          </div>
          <NavBar
            handleBurgerMenu={handleBurgerMenu}
            isBurgerMenu={burgerMenu}
          />
        </header>
      ) : (
        <header className="header w-100 d-flex justify-content-around align-items-center p-4">
          <Link to="/">
            <img
              className="headerIcon"
              src="https://i.ibb.co/Zcfzb2s/brgIcon.png"
              alt=""
            />
          </Link>
          <NavBar />
        </header>
      )}
    </>
  )
}
export default Header
