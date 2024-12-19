import React from "react"
import "./TodoItem.css"
/* TodoItem 컴포넌트 리렌더 방지
	할 일 아이템을 수십~수백개 이상 등록할 경우, 불필요한 렌더링이 발생했을 때 치명적인 성능 문제를 야기한다.
	아이템을 추가하는 상황 외에도 아이템 제거, 체크박스 클릭, 검색 폼 입력 시에도 TodoItem 컴포넌트는 리렌더된다.
*/
// React.memo를 이용해 불필요한 TodoItem 컴포넌트의 리렌더를 방지했지만 검색 폼에서 검색어를 입력했을 때 불필요한 리렌더가 일어나지 않는다.
// 할 일 아이템을 추가하거나 체크, 삭제등을 할 때 리렌더가 많이 발생한다.

/* TodoItem은 Props로 id, Content, isDone, createDate와 같이 원시 자료형에 해당하는 값뿐만 아니라,
	onUpdate, onDelete와 같이 객체 자료형에 해당하는 함수도 받는다.
*/
// App컴포넌트를 리렌더하면 onUpdate, onCreate등의 홤수도 전부 다시 생성된다.
// 동등 비교 연산자 ===로 객체 자료형을 비교할 때 해당 객체의 참조값을 기준으로 한다.
// App 컴포넌트를 리렌더하면 새롭게 만든 onUpdate와 기존의 onUpdate는 동일한 기능을 수행하는 함수라도 다른 참조값을 갖게된다.
// 따라서 React.memo는 Props가 변한 것으로 판단한다.
// App 컴포넌트를 리렌더하면 함수 onUpdate와 onDelete가 다시 만들어지는데, 이때 함수는 새롭게 선언한 것과 마찬가지로 참조값이 변경된다.
// 따라서 이 함수를 Props로 받는 컴포넌트는 React.memo를 적용했다고 하더라도 다시 렌더링된다.
// 이런 문제 때문에 컴포넌트를 리렌더해도 함수를 다시 생성하지 않도록 만들어주는 리액트 훅 useCallback을 사용한다.

// 불필요한 함수 재생성 방지
// useCallback은 컴포넌트가 리렌더될 때 내부에 작성된 함수를 다시 생성하지 않도록 메모이제이션하는 리액트 훅이다.
// useCallback을 이용해[할 일 관리]앱 최적화
// useCallback의 기본 사용법
// [useCallback의 용법]
// const memoizedFunc = useCallback(func, deps)
// func- 콜백함수
// deps- 의존성 배열
// useCallback은 useMemo처럼 2개의 인수를 제공한다. 첫번째 인수로는 메모이제이션하려는 콜백 함수를 전달하고, 두번째 인수로는 의존성 배열을 전달한다.
// useCallback은 의존성 배열에 담긴 값이 바뀌면 첫번째 인수로 전달한 콜백 함수를 다시 만들어 반환한다.
// 만약 첫번째 인수로 전달한 콜백 함수를 어떤 경우에도 다시 생성되지 않게 하려면 의존성 배열을 빈 배열로 전달하면된다.
// useCallback의 첫번째 인수로 전달한 콜백 함수에서 State변수에 접근하는 경우 문제가 발생할 수 있다.
/*
	const onCreate = useCallback(() => {
		set State([newItem, ...state])
		}, [])
*/
// 의존성 배열이 빈 배열이므로 함수 onCreate는 처음 생성된 후에는 컴포넌트가 리렌더되어도 다시 생성되지 않는다.
// 이 경우 콜백 함수가 컴포넌트의 마운트 시점 이후에 다시 생성되지 않기 때문에
// useCallback에서 전달한 콜백 함수에서 State변수에 접근하면 컴포넌트 마운트할 때의 값, 즉 State의 초기값이 반환된다.
// 따라서 마운트할 때의 State값만 사용할 수 있다.
// useCallback으로 래핑된 함수 onCreate는 state의 변화를 추적하지 못하므로 자칫 의도치않은 동작을 야기할 수 있다.
// 그렇다고 의존성 배열에 State변수를 전달하면 결국 이를 업데이트할 때마다 함수 onCreate를 계속 재생성하므로
// useCallback을 적용한 의미가 사라진다.
// 이 때 setState의 인수로 콜백 함수를 전달하는 리액트의 '함수형 업데이트'기능을 이용하면 된다.
/*
	const onCreate = useCallback(()=> {
			setState((state)=>[newItem, ...state])
		})
*/
// setState에서 콜백 함수를 전달하면 함수형 업데이트를 사용할 수 있는데, 이 함수는 항상 최신 State값을 매개변수로 저장한다.
// 그리고 콜백 함수가 반환한 값은 새로운 State값이 되어 업데이트된다.
// 따라서 useCallback을 사용하면서 setState로 최신 State값을 추적하려면 함수형 업데이트 기능을 이용해야한다.

const TodoItem = ({id, content, isDone, createDate, onUpdate, onDelete}) => {
	const onChangeCheckbox = () => {
		onUpdate(id)
	}
	const onClickDelete = () => {
		onDelete(id)
	}
	return (
		<div className="TodoItem">
			<div className="checkbox_col">
				<input onChange={onChangeCheckbox} checked={isDone} type="checkbox"></input>
			</div>
			<div className="title_col">{content}</div>
			<div className="date_col">
				{new Date({createDate}).toLocaleDateString()}
				</div>
			<div className="btn_col">
				<button onClick={onClickDelete}>삭제</button>
			</div>
		</div>
	)
}
// React.memo를 이용해 불필요한 TodoItem 컴포넌트의 리렌더 방지
export default React.memo(TodoItem)