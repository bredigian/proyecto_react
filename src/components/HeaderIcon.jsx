import { Link } from "react-router-dom"
const HeaderIcon = () => {
  return (
    <div className="d-flex flex-column align-items-center gap-2">
      <Link to="/">
        <img className="headerIcon" src="/img/brgIcon.png" alt="" />
      </Link>
    </div>
  )
}
export default HeaderIcon
