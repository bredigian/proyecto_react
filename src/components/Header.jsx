import HeaderIcon from "./HeaderIcon"
import NavBar from "./NavBar"
const Header = (props) => {
  return (
    <header className="header w-100 d-flex justify-content-around align-items-center p-5">
      <HeaderIcon name="brg's Shop" />
      <NavBar />
    </header>
  )
}
export default Header
