const HeaderIcon = (props) => {
  return (
    <div className="d-flex flex-column align-items-center gap-2">
      <img className="headerIcon" src="img/headerIcon.png" alt="" />
      <p className="shopTitle m-0">{props.name}</p>
    </div>
  )
}
export default HeaderIcon
