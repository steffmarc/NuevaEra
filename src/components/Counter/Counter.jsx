import { useCount } from "../../customHooks/useCount"
import "./Counter.css"

const Counter = () => {

    const {count, increase, decrease} = useCount(1, 10)

  return (
    <div className="counterContainer">
        <button className="btnCount" onClick={decrease}> - </button>
        <strong>{count}</strong>
        <button className="btnCount" onClick={increase}> + </button>
    </div>
  )
}

export default Counter