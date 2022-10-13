import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
const NavBar = ({ handleBurgerMenu, isBurgerMenu }) => {
  return (
    <nav
      className={
        isBurgerMenu
          ? "showBurgerMenu navbar d-flex align-items-end gap-5"
          : "navbar d-flex align-items-end gap-5"
      }
    >
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="link" to="/products">
          Products
        </Link>
        <ul className="d-flex flex-column align-items-start">
          <li>
            <Link className="link" to="/products/Headphone">
              Headphone
            </Link>
          </li>
          <li>
            <Link className="link" to="/products/Keyboard">
              Keyboard
            </Link>
          </li>
          <li>
            <Link className="link" to="/products/Mouse">
              Mouse
            </Link>
          </li>
        </ul>
      </li>
      <CartWidget />
    </nav>
  )
}
export default NavBar
