// count값이 짝수면 특정 문자열 렌더링

import { useEffect } from "react";

// useEffect를 사용해 이 컴포넌트가 언마운트될 때 콘솔에 특정 문자열을 출력
function Even() {
	// 의존성 배열로 빈 배열을 전달하고, 콜백 함수가 함수를 반환하면 이 함수는 컴포넌트의 언마운트 시점에 실행된다.
	useEffect(() => {
		return () => {
			console.log("Even 컴포넌트 언마운트");
		}
	}, [])
	return (
	<div>
			현재 카운트는 짝수
	</div>
	)
}
export default Even