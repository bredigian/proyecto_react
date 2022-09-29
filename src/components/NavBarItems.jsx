import { VscHome } from "react-icons/vsc"
import {
  HiOutlineShoppingBag,
  HiOutlineShoppingCart,
  HiOutlineInformationCircle,
} from "react-icons/hi"
const NavBarItems = {
  Home: () => {
    return (
      <li>
        <a href="#">
          <VscHome />
        </a>
      </li>
    )
  },
  Products: () => {
    return (
      <li>
        <a href="#">
          <HiOutlineShoppingBag />
        </a>
      </li>
    )
  },
  Shop: () => {
    return (
      <li>
        <a href="#">
          <HiOutlineShoppingCart />
        </a>
      </li>
    )
  },
  About: () => {
    return (
      <li>
        <a href="#">
          <HiOutlineInformationCircle />
        </a>
      </li>
    )
  },
}
export default NavBarItems
