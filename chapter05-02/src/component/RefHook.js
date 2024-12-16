// useRef

import { useRef, useState } from "react"

// 리액트에서 useRef라는 리액트 함수를 이용해 Ref객체를 생성한다.
function RefHook() {
	const [text, setText] = useState("")
	// <input>태그에서 ref = {textRef}명령으로 textRef가 DOM입력 폼에 접근하도록 설정
	// textRef를 이용하면 입력 폼을 직접 조작할 수 있다.
	const textRef = useRef()

	const handleOnChange = (e) => {
		setText(e.target.value)
	}
	const handleOnClick = (e) => {
		textRef.current.value=""
		alert(text)
	}
	const [text1, setText1] = useState("")
	const handleOnChange1 = (e) => {
		setText1(e.target.value)
	}
	const handleOnClick1 = (e) => {
		setText1("")
	}
	return(
		<div>
			<h1>{text1}</h1>
			<input id="i1" value={text1} onChange={handleOnChange1}></input>
			<button onClick={handleOnClick1}>초기화</button>
			<input ref={textRef} value={text} onChange={handleOnChange}/>
			{/* <input onChange={handleOnChange}></input> */}
			<button onClick={handleOnClick}>작성 완료</button>
		</div>
	)
}
export default RefHook