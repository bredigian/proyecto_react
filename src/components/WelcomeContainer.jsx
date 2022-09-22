import WelcomeItems from "./WelcomeItems"
import WelcomeTitle from "./WelcomeTitle"
const WelcomeContainer = (props) => {
  return (
    <div className="welcome d-flex w-100 align-items-start justify-content-evenly p-4 mt-5 mb-5">
      <WelcomeTitle name="brg's Shop" />
      <WelcomeItems />
    </div>
  )
}
export default WelcomeContainer
