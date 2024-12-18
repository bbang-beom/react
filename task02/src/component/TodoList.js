import { useMemo, useState } from "react"
import TodoItem from "./TodoItem"
import "./TodoList.css"


// 최적화
// 최적화와 메모이제이션
// 리액트 앱에서 연산 최적화는 대부분 메모이제이션 기법을 이용한다.
// 메모이제이션이란 말그대로 메모하는 방법이다.
// 메모이제이션은 특정 입력에 대한 결과를 계산해서 메모리 어딘가에 저장해 동일한 요청이 들어오면 저장한 결과값을 제공해 빠르게 응답하는 기술이다.

// 함수의 불필요한 재호출 방지
// 할 일 분석 기능 추가
// 추가한 할 일 아이템이 모두 몇개인지, 완료 아이템과 미완료 아이템은 각각 몇개인지 검색해 페이지에 렌더링

const TodoList = ({todo, onUpdate, onDelete}) => {
	const [search, setSearch] = useState("")
	
	// 문제점 파악
	// analyzeTodo 함수를 불필요하게 호출하는 일이 없어야 한다.
	// 함수에 대한 불필요한 호출이 있는지 확인
	// 호출할 때마다 콘솔에 메시지를 출력
	// const analyzeTodo = () => {
		// 검색 폼에 검색어를 입력할 때 문자 하나씩 analyzeTodo 함수 호출이라는 메시지가 콘솔에 출력
		// console.log("analyzeTodo 함수 호출");
		// const totalCount = todo.length
		// const doneCount = todo.filter((it) => it.isDone).length
		// const notDoneCount = totalCount-doneCount
		// return {
		// 	totalCount,
		// 	doneCount,
		// 	notDoneCount,
		// }
	// }

	// const {totalCount, doneCount, notDoneCount} = analyzeTodo()

	// useMemo를 이용해 [할 일 관리]앱 최적화
	// useMemo의 기본 사용법
	// useMemo를 사용하면 특정 함수를 호출했을 때 그 함수의 반환값을 기억한다.
	// 같은 함수를 다시 호출하면 기억했던 값을 반환한다.
	// 따라서 useMemo를 이용하면 함수의 반환값을 다시 구하는 불필요한 연산을 수행하지 않아 성능을 최적화 할 수 있다.
	// 이처럼 함수의 연산 결과를 기억하는 것을 "메모이제이션"이라 한다.
	// 기본형
	// const value = useMemo(callback, deps)
	// callback - 콜백함수, dep - 의존성 배열
	// 의존성 배열에 담긴 값이 바뀌면 콜백 함수를 다시 실행하고 결과값을 반환한다.
	const analyzeTodo = useMemo(() => {
		console.log("analyzeTodo 함수 호출");
		const totalCount = todo.length
		const doneCount = todo.filter((it) => it.isDone).length
		const notDoneCount = totalCount-doneCount
		return {
			totalCount,
			doneCount,
			notDoneCount,
		}
	},[todo])
	// useMemo는 함수가 아닌 값을 반환하므로 함수 analyzeTodo에는 값이 저장된다.
	// 따라서, 구조 분해 할당의 대상을 기존의 analyzeTodo()가 아닌 analyzeTodo로 변경해야한다.
	const {totalCount, doneCount, notDoneCount} = analyzeTodo

	const onChangeSearch = (e) => {
		setSearch(e.target.value)
	}
	const getSearchResult = () => {
		return search === "" ? todo:todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()))
	}
	return (
		<div className="TodoList">
			<h4>Todo List💡</h4>
			<input value={search} onChange={onChangeSearch} className="searchbar" placeholder="검색어 입력"></input>
			<div className="list_wrapper">
				{getSearchResult().map((it) => (
						<TodoItem key={it.id} {...it} onUpdate={onUpdate} onDelete={onDelete}/>
					))}
			</div>
			<div>
				<div>총개수: {totalCount}</div>
				<div>한 일의 개수: {doneCount}</div>
				<div>해야할 일의 개수: {notDoneCount}</div>
			</div>
		</div>
	)
}
export default TodoList