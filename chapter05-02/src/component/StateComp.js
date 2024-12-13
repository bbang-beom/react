import { useState } from "react";
// State의 기본 사용법
// 리액트에서 함수 useState로 State 생성
// 기본형
// const [light, setLight] = useState("off") -> light - State변수 setLight - set함수
// useState를 호출하면 2개의 요소가 담긴 배열을 반환
// 이때 배열의 첫번째 요소 light는 현재 상태의 값을 저장하고 있는 변수 -> State 변수
// 두번째 요소 setLight는 State변수의 값을 변경하는(상태를 업데이트하는) 함수 -> Set함수

// set 함수로 State값 변경
function StateComp() {
	const [count, setCount] = useState(0)
	function onIncrease() {
		setCount(count + 1)
	}
	return (
		<div>
				<h2>{count}</h2>
				<button onClick={onIncrease}>+</button>
		</div>
	)
}
export default StateComp