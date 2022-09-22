import TypeItems from "./TypeItems"
const WelcomeItems = () => {
  return (
    <div className="welcome-items d-flex flex-column align-items-center gap-4">
      <p className="welcome-items__title m-0">Category</p>
      <div className="welcome-items__container d-flex align-items-end gap-5 flex-wrap">
        <TypeItems.Mouse nameItem="Mouse" img="./img/typeItems/mouse.png" />
        <TypeItems.Keyboard
          nameItem="Keyboards"
          img="./img/typeItems/keyboard.png"
        />
        <TypeItems.Headphone
          nameItem="Headphones"
          img="./img/typeItems/headphone.png"
        />
        <TypeItems.Joystick
          nameItem="Joystick"
          img="./img/typeItems/joystick.png"
        />
      </div>
    </div>
  )
}
export default WelcomeItems
