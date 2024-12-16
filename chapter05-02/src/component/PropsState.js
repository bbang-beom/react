// Props와 State
// 동적으로 변하는 값인 리액트의 State도 일종의 값이므로 Props로 전달할 수 있다.

import { useState } from "react";
import Judge from "./Judge";
import Viewer from "./Viewer";

function PropsState() {
	const [number, setNumber] = useState(0)
	const onDecrease = () => {
		setNumber(number - 1)
	}
	const onIecrease = () => {
		setNumber(number + 1)
	}
	// 자식 컴포넌트는 Props로 전달된 State값이 변하면 자신도 리렌더된다.
	// 즉, 부모에 속해있는 State(number)값이 변하면 Judge컴포넌트에서 구현한 짝수, 홀수 값도 따라서 변한다.
	let num = 0
	num = num + 1
	// State와 자식 컴포넌트
	// 리액트에서는 부모 컴포넌트가 리렌더되면 자식도 함께 리렌더된다.
	// 	Viewer컴포넌트의 내용에는 변한게 없기 때문에 Viewer는 부모컴포넌트가 리렌더된다고해서 리렌더될 이유가 없다.
	// 의미없는 리렌더가 자주 발생하면 웹 브라우저의 성능은 떨어진다.
	return (
		<div>
			<h2>{number}</h2>
			<Judge number = {number}/>
			<Viewer num = {num}/>
			<button onClick = {onDecrease}>-</button>
			<button onClick = {onIecrease}>+</button>
		</div>
	)
}
export default PropsState