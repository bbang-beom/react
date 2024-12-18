import { useReducer } from "react";

// 함수 reducer에는 2개의 매개변수가 있다.
// 첫번째 매개변수 state에는 현재 State의 값이 저장된다.
// 두번째 매개변수 action에는 함수 dispatch를 호출하면서 인수로 전달한 action객체가 저장된다.
// 함수 reducer가 반환하는 값이 새로운 State값이 된다.

// useReducer 함수는 reducer를 이용해 상태변화 코드를 컴포넌트 외부로 분리한다.
function reducer(state, action) {
	switch(action.type){
		case "INIT":
			return 0
		case "INCREASE":
			return state + action.data
		case "DECREASE":
			return state - action.data
		default:
			return state
	}
}

function TestComp01() {
	const [count, dispatch] = useReducer(reducer, 0)
	// dispatch에서는 인수로 객체를 전달하는데, 이 객체는 State의 변경 정보를 담고 있다.
	// 이 객체를 다른 표현으로 'action객체'라 한다.

	return (
		<div>
			<h4>테스트 컴포넌트01</h4>
			<div>
				<h5><bold>{count}</bold></h5>
			</div>
			<div>
				<button onClick={() => dispatch({type:"INCREASE",data:1})}>+</button>
				<button onClick={() => dispatch({type:"DECREASE",data:1})}>-</button>
				<button onClick={() => dispatch({type:"INIT"})}>초기화</button>
			</div>
		</div>
	)
}
export default TestComp01