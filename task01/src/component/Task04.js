import { useState } from "react";

function Task04() {
	const [text, setText] = useState("")
	const handleOnChange=(e)=>{
		setText(
			// {...text}, [e.target.name]:e.target.value
		);
}
	const handleOnClick = (e) => {
		console.log(text);
	}
	return(
		<div>
			<fieldset>
        <h1>회원 가입을 환영합니다.</h1>
        <fieldset>
        <legend>사용자 정보</legend>
    <ul>
        <li>
            <label for="uid">아이디</label>
            <input onChange={handleOnChange} type="text" id="uid" autofocus placeholder="4자~10자 사이, 공백없이" required/>
        </li>
        <li>
            <label for="umail">이메일</label>
            <input onChange={handleOnChange} type="email" id="umail" required/>
        </li>
        <li>
            <label for="pwd1">비밀번호</label>
            <input onChange={handleOnChange} type="password" id="pwd1" placeholder="문자와 숫자, 특수기호 포함" required/>
        </li>
        <li>
            <label for="pwd2">비밀번호 확인</label>
            <input onChange={handleOnChange} type="password" id="pwd2" required/>
        </li>
				<li>
						<label for="path">가입경로</label>
						<select onChange={handleOnChange} name="" id="path">
							<option value="blog">블로그</option>
							<option value="search">웹 검색</option>
							<option value="sns">sns</option>
							<option value="etc">기타</option>
						</select>
</li>
    </ul>
    </fieldset>
    </fieldset>

    <fieldset>
        <legend>이벤트와 새로운 소식</legend>
        <input onChange={handleOnChange} type="radio" name="mailing" id="mailing_y" value="mailing_yes"/>
        <label for="mailing_y">메일 수신</label>
        <input onChange={handleOnChange} type="radio" name="mailing" id="mailing_n" value="mailing_no" checked/>
        <label for="mailing_n">메일 수신 거부</label>
    </fieldset>
    <input onClick={handleOnClick} type="submit" value="가입하기"/> <input type="reset" value="취소"/>
		</div>
	)
}
export default Task04