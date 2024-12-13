import React from 'react';
// JSX와 자바스크립트 표현식(값으로 평가되는 식)
// JSX는 자바스크립트 표현식을 html태그와 함께 사용할 수 있어 가독성 있는 코드를 작성할 수 있다.
function Body() {
	// 산술 표현식
	// 숫자로 표현되는 식
	const numA = 1
	const numB = 2

	// 문자열 표현식
	// 문자열 또는 문자열로 평가되는 식
	const strA = "hello "
	const strB = "react"

	// 리팩토링 - 코드를 올바른 방향으로 수정하는 것
	// 1. 중복되는 코드 제거
	// 2. 코드를 일률적으로 작성

	// 논리 표현식
	// 참이나 거짓으로 표현되는 식
	const boolA = true;
	const boolB = false;
	// 논리 표현식의 결과인 boolean 값은 페이지에 렌더링되지 않는다.
	// 형 변환 함수를 이용해 문자열로 바꿔 보여줄 수 있다.
	// 사용할 수 없는 값
	// 원시 자료형에 해당하는 숫자, 문자열, boolean, null, undefined를 제외한 값을 사용하면 오류가 발생한다.
	const objA = {
		a:1,
		b:2,
	}
	// 객체 자료형 값을 반환하는 표현식은 "객체는 리액트의 자식으로 유효하지 않다"라는 뜻의 오류가 발생(objA.a는 가능 objA는 불가능)
	// 객체 자료형의 값을 페이지에 렌더링하고 싶다면, 값을 원시 자료형으로 바꿔줘야한다.
	// JSX문법에서 지켜야할 점
	// 닫힘 규칙: JSX의 모든 태그는 여는 태그가 있으면 반드시 닫는 태그도 있어야 한다.
	// html태그 중 <img>, <input>처럼 닫힘 태그가 없어도 사용할 수 있는 것도 <img />, <input />처럼 닫는 태그가 있어야 한다.
	// 최상위 태그 규칙
	// 1. JSX가 반환하는 모든 태그는 반드시 최상위 태그로 감싸야한다.
	// 2. return문 안에 최상위 태그가 하나만 존재해야한다.
	// html 태그를 최상위 태그로 사용하지 않으려면, <React.Fragment>태그를 사용한다. 단, 페이지에서 이 태그는 렌더링되지 않는다.
	// <React.Fragment>대신 빈 태그 '<></>'를 사용할 수도 있다.

	// 조건부 렌더링
	// 리액트 컴포넌트가 조건식의 결과에 따라 각기 다른 값을 페이지에 렌더링하는 것
	// 삼항 연산자를 활용한 조건부 렌더링
	const num = 19;
	
	// if조건문은 표현식에 해당하지 않기 때문에 JSX와 함께 사용할 수 없지만, 표현식인 삼항 연산자를 이용하면 조건에 따라 다른 값을 렌더링할 수 있다.
	// 조건문을 이용한 조건부 렌더링
	if(num%2===0){
		return <div>{num}은(는) 짝수입니다.</div>
	}else {
		return <div>{num}은(는) 홀수입니다.</div>
	}
	return (
		<>
		<h2>
			{num}은(는) {num%2===0?"짝수":"홀수"}입니다.
		</h2>
		{/* <React.Fragment></React.Fragment> */}
			<div></div>
			<div>
				<div></div>
				<div>
				<h2>{objA.a} {objA.b}</h2>
				{/* {<h2>{objA}</h2>} */}
				<h2>{String(boolA || boolB)}</h2>
				<h1>body</h1>
				<h2>{numA+numB}</h2>
				<h2>{strA+strB}</h2>
				</div>
			</div>
		</>
	)
}
export default Body;