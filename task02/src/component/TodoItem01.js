import React, { useContext } from "react";
import { TodoDispatchContext } from "../App01";
import "./TodoItem.css";

const TodoItem01 = ({id, content, isDone, createDate}) => {
	//. TodoItem컴포넌트에서 useContext로 함수 onUpdate와 onDelete를 받아서 사용할 수 있게 수정
	const {onUpdate, onDelete} = useContext(TodoDispatchContext)

	//. TodoItem컴포넌트에 적용했던 React.memo가 리팩토링 이후에도 제대로 동작하는지 다시 확인
	console.log(`${id} 업데이트`);
	// React.memo가 리팩토링 이후 정상적으로 동작하지 않음
	// 원인 파악
	// Context의 Provider 리액트 컴포넌트이므로 Props로 전달되는 value값이 바뀌면 리렌더 된다.
	// 이 과정에서 TodoContext.Provider아래의 컴포넌트들도 함께 리렌더된다.
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

export default React.memo(TodoItem01)