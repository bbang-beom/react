import { useState } from "react"

function Task05() {
	const [count, setCount] = useState(0)
	const handleOnClick = (e) => {
		setCount(count + Number(e.target.value))
	}
	const reset = () => {
		setCount(0)
	}
	return (
		<div>
			<h1>Simple Count</h1>
			<button onClick = {reset}>초기화</button>
			<p>현재 카운트:</p>
			<h2>{count}</h2>
			<button onClick={handleOnClick} value = {("-1")} >-1</button>
			<button onClick={handleOnClick} value = {("-10")} >-10</button>
			<button onClick={handleOnClick} value = {("-100")} >-100</button>
			<button onClick={handleOnClick} value = {("100")} >+100</button>
			<button onClick={handleOnClick} value = {("10")} >+10</button>
			<button onClick={handleOnClick} value = {("1")} >+1</button>
		</div>
	)
}
export default Task05