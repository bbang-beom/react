import { useState } from "react"

function Task03() {
	const [count, setCount] = useState(0)
	function onIncrease() {
		setCount(count+1)
	}
	function onDecrease() {
		setCount(count-1)
	}
	return (
		<div>
			<button onClick={onIncrease}>증가</button>
			<h1>{count}</h1>
			<button onClick={onDecrease}>감소</button>
		</div>
	)
}
export default Task03