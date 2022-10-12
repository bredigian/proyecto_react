import { LeapFrog } from "@uiball/loaders"
const Loading = () => {
  return (
    <div className="spinner d-flex flex-column align-items-center">
      <LeapFrog size={75} color="#000000" />
    </div>
  )
}
export default Loading
