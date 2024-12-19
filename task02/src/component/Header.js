import React from "react"
import "./Header.css"

// 불필요한 컴포넌트 리렌더 방지
// React.memo를 이용하여 메모이제이션 기법으로 컴포넌트가 불필요하게 리렌더되는 상황을 방지할 수 있다.
// 고차 컴포넌트와 횡단 관심사
// 고차 컴포넌트
// HOC는 Higher Order Component의 약자
// 고차 컴포넌트는 컴포넌트의 기능을 다시 사용하기 위한 리액트의 고급 기술
// useMemo, useEffect처럼 use키워드가 앞에 붙는 리액트 훅과는 다르다.
// 고차 컴포넌트는 인수로 전달된 컴포넌트를 새로운 컴포넌트로 반환하는 함수지만 전달된 컴포넌트를 그대로 반환하는게 아니라 특정 기능을 추가해서 반환한다.
// 기능이 추가되어 반환된 컴포넌트를 '강화된 컴포넌트'라 한다.
// 강화된 컴포넌트 반환 예
// const EnhancedComp = widthFunc(Comp)

// 횡단 관심사
// 고차 컴포넌트를 이용하면 횡단 관심사 문제를 효율저으로 해결할 수 있어 실무에서 많이 활용한다.
// 횡단 관심사란 크로스 커팅 관심사(Cross-Cutting Concerns)라고도 하는데, 프로그래밍에서 비즈니스 로직과 구분되는 공통 기능을 지칭할 때 사용하는 용어이다.
// 반면 비즈니스 로직은 해당 컴포넌트가 존재하는 핵심 기능을 표현할 때 사용한다.
// 프로그래밍에서 횡단 관심사는 주로 로깅, 데이터베이스 접속, 인가 등 여러 곳에서 호출해 사용하는 코드들을 말한다.
// 모든 컴포넌트가 마운트와 동시에 콘솔에 특정 메시지를 출력하는 기능은 컴포넌트의 핵심 로직은 아니다.
// 수많은 컴포넌트에서 공통으로 사용하는 횡단 관심사에 해당하는 기능이다.
// 여러 컴포넌트에서 횡단 관심사 코드를 작성하는 것은 중복 코드를 만드는 주요 요인 중 하나이다.
// 고차 컴포넌트를 이용하면 횡단 관심사 코드를 함수로 분리할 수 있다.

// React.memo를 이용해 [할 일 관리]앱 최적화
// React.memo는 컴포넌트가 모든 상황에서 리렌더되지 않도록 강화하여 서비스를 최적화하는 도구이다.
// 기본 사용법
// React.memo는 인수로 전달한 컴포넌트를 메모이제이션된 컴포넌트로 만들어 반환한다. 이 때 Props가 메모이제이션의 기준이된다.
// 즉, React.memo가 반환하는 컴포넌트는 부모 컴포넌트에서 전달된 Props가 변경되지 않는한 리렌더되지 않는다.
// 컴포넌트가 크고 복잡할수록 불필요한 렌더링을 방지하면, 브라우저의 연산량을 줄여 성능 최적화에 도움이된다.
// [React.memo의 용법]
// const memoizedComp = React.memo(Comp)
// Comp - 메모이제이션하려는 컴포넌트

// Header 컴포넌트의 리렌더 방지
// Header 컴포넌트는 부모 컴포넌트인 App에서 Props를 받지 않는다. 날짜를 표시하는 간단한 기능만 하기 때문에 리렌더할 필요가 없다.
const  Header = () => {
	return (
	<div className="Header">
		<h3>오늘은 📅</h3>
		<h1>{new Date().toDateString()}</h1>
		</div>
	)
}
// 마운트할 때는 제외하고 콘솔에 Header업데이트 메시지를 출력하지 않는다.
// React.memo를 이용해 Header컴포넌트를 불필요하게 렌더링하지 않도록 성공적으로 최적화하였다.
export default React.memo(Header)