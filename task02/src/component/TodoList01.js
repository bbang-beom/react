import { useContext, useMemo, useState } from "react";
import { TodoContext } from "../App01";
import TodoItem from "./TodoItem";
import "./TodoList.css";

//. TodoList 컴포넌트에서 Context데이터 사용
// Context도 다른 파일에서 불러올 수 있게 export 해야한다.
const TodoList01 = () => {
	// useContext를 호출하고 TodoContext를 인수로 전달하여 이 Context가 공급하는 데이터를 storeDate에 저장
	// const storeData = useContext(TodoContext)
	const todo = useContext(TodoContext)
	const [search, setSearch] = useState("")
	
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

	const {totalCount, doneCount, notDoneCount} = analyzeTodo

	const onChangeSearch = (e) => {
		setSearch(e.target.value)
	}
	const getSearchResult = () => {
		return search === "" ? todo:todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()))
	}
	//. TodoItem 컴포넌트에서 Context데이터 사용
	return (
		<div className="TodoList">
			<h4>Todo List💡</h4>
			<input value={search} onChange={onChangeSearch} className="searchbar" placeholder="검색어 입력"></input>
			<div className="list_wrapper">
				{getSearchResult().map((it) => (
						<TodoItem key={it.id} {...it}/>
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
export default TodoList01