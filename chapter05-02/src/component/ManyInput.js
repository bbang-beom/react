// 여러개의 사용자 입력 관리
// 객체의 괄호 표기법을 사용하여 입력 폼의 name속성(e.target.name)을 key로, 입력 폼에 입력한 값(e.target.value)을 value로 저장
function ManyInput() {
	let inputValue = {}
	const handleOnChange = (e) => {
		inputValue = {
			...inputValue,
			[e.target.name]:e.target.value,
		}
		console.log(e.name);
	}
	// 객체에서 key값에 대괄호를 넣는 이유
	// name 변수의 값이 key 값이 된다.
	let obj = {
		name: "react"
	}
	console.log(obj);
	const name = "framework"
	let obj2 = {
		[name]:"react"
	}
	console.log(obj2);
	return (
	<div>
		<div>
			<input name="name" onChange={handleOnChange} placeholder="이름"/>
		</div>
		<div>
			<select name="gender" onChange={handleOnChange}>
				<option key=""></option>
				<option key="male">남자</option>
				<option key="female">여자</option>
			</select>
		</div>
		<div>
			<input type="date" name="birth" onChange={handleOnChange}></input>
		</div>
		<div>
			<textarea name="bio" onChange={handleOnChange}></textarea>
		</div>
	</div>
	)
}
export default ManyInput