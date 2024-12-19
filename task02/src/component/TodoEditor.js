import { useContext, useRef, useState } from "react"
import "./TodoEditor.css"

//. TodoEditor 컴포넌트에 데이터 공급
const TodoEditor = () => {
	const {onCreate} = useContext(TodoContext)
	const [content, setContent] = useState("")
	const inputRef = useRef()
	const onChangeContent = (e) => {
		setContent(e.target.value)
	}
	const onSubmit = () => {
		if(!content) {
			inputRef.current.focus()
			return
		}
		onCreate(content)
		setContent("")
	}
	const onKeyDown = (e) => {
		if(e.keyCode === 13) {
			onSubmit();
		}
	}
	return (
		<div className="TodoEditor">
			<h4>새로운 Todo 작성🖊</h4>
			<div className="editor_wrapper">
				<input ref={inputRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder="새로운 Todo..."></input>
				<button onClick={onSubmit}>추가</button>
			</div>
		</div>
	)
}
export default TodoEditor