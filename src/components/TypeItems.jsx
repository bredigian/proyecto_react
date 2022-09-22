const TypeItems = {
  Mouse: (props) => {
    return (
      <div className="typeItem d-flex flex-column align-items-center gap-3 p-4">
        <div className="typeItem-img">
          <img src={props.img} alt="" />
        </div>
        <p className="typeItem-name m-0 text-center">{props.nameItem}</p>
      </div>
    )
  },
  Keyboard: (props) => {
    return (
      <div className="typeItem d-flex flex-column align-items-center gap-3 p-4">
        <div className="typeItem-img">
          <img src={props.img} alt="" />
        </div>
        <p className="typeItem-name m-0 text-center">{props.nameItem}</p>
      </div>
    )
  },
  Headphone: (props) => {
    return (
      <div className="typeItem d-flex flex-column align-items-center gap-3 p-4">
        <div className="typeItem-img">
          <img src={props.img} alt="" />
        </div>
        <p className="typeItem-name m-0 text-center">{props.nameItem}</p>
      </div>
    )
  },
  Joystick: (props) => {
    return (
      <div className="typeItem d-flex flex-column align-items-center gap-3 p-4">
        <div className="typeItem-img">
          <img src={props.img} alt="" />
        </div>
        <p className="typeItem-name m-0 text-center">{props.nameItem}</p>
      </div>
    )
  },
}
export default TypeItems
