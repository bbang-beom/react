// State로 사용자 입력 관리

import { useState } from "react";

// <input>태그로 텍스트 입력
// onChange에 이벤트 핸들러를 설정
function InputManage() {
	const [text, setText] = useState("")

	const handleOnChange = (e) => {
		console.log(e.target.value);
	}

	// <input>태그로 날짜 입력
	const [date, setDate] = useState("")
	const dateOnChange = (e) => {
		console.log("변경된 값: " + e.target.value);
		setDate(e.target.value)
	}

	// 드롭다운 상자로 여러 옵션 중 하나 선택
	// 드롭다운 입력 폼에서 옵션을 선택하면 e.target.value에는 현재 사용자가 선택한 옵션의 key속성이 저장된다.
	const selectHandle = (e) => {
		console.log("select: " + e.target.value);
	}
	// 글상자로 텍스트 여러 줄 입력
	const taHandle = (e) => {
		console.log("textarea: ", e.target.value);
	}
	return (
	<div>
		<textarea onChange={taHandle}/>
		<select onChange={selectHandle}>
			<option key={"1번"}>1번</option>
			<option key={"2번"}>2번</option>
			<option key={"3번"}>3번</option>
		</select>
		<input type="date" onChange={dateOnChange}> value = {date}</input>
		<h1>{text}</h1>
		<input onChange={handleOnChange}></input>
	</div>
	)
}
export default InputManage;