import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/features/counter/Slice'

export default function TestCounterComponent() {
  // const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="bg-emerald-500 text-white px-3 py-1 rounded-lg text-md"
        >
          Add to cart
        </button>
        {/* <span>{count}</span> */}
        {/* <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button> */}
      </div>
    </div>
  )
}