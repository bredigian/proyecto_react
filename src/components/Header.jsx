import HeaderIcon from "./HeaderIcon"
import { CgMenu } from "react-icons/cg"
import NavBar from "./NavBar"
import GetWindowSize from "../functions/GetWindowSize"
import { useState, useEffect } from "react"
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
            <HeaderIcon />
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
          <HeaderIcon />
          <NavBar />
        </header>
      )}
    </>
  )
  // return (
  //   <header className="header w-100 d-flex justify-content-around align-items-center p-4">
  //     <HeaderIcon />
  //     <NavBar />
  //   </header>
  // )
}
export default Header
