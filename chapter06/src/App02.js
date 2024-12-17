// useEffect로 라이플 사이클 제어
// 컴포넌트의 3단계 라이프 사이클 중
import { useEffect, useRef, useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App02() {

  const [count, setCount] = useState(0)
  const handleSetCount = (value) => {
    setCount(count + value)
  }

  const [text,setText]=useState("")
  const handleChangeText=(e)=>{
    setText(e.target.value)
  }
	// 두번째 요소인 의존성 배열에 아무것도 전달하지 않으면, useEffect는 컴포넌트를 렌더링할 때마다 콜배 함수를 실행한다.
	// 처음 페이지에 렌더링하는 마운트 시점 한번과 컴포넌트를 리렌더하는 업데이트 시점 두번의 결과가 콘솔에 출력된다.	
  // useEffect(()=> {
  //   console.log("컴포넌트 업데이트: ")
  // })

	// useEffect에서 마운트 시점은 제외하고 업데이트 시점에만
	const didMountRef = useRef(false)
  useEffect(()=> {
		if(!didMountRef.current) {
			didMountRef.current = true
			return
		}else {
			console.log("컴포넌트 업데이트: ")
		}
  })

	// 클린업
	// 리액트 컴포넌트의 언마운트 시점을 제어하기 위해 먼저 클린업을 이해해야한다.
	// useEffect를 호출하고 의존성 배열을 전달하지 않는다.
	// 따라서 App컴포넌트를 렌더링할 때마다 첫번째 인수로 전달한 콜백 함수가 실행된다.
	// 페이지에서 버튼을 누르면 여러번 리렌더된다. 그래서 함수 setInterval에서 정한 인터벌(1초)이 아닌
	// 매우 빠른 속도로 문자열이 콘솔에 출력되는 현상이 나타난다.
	// 이는 두가지 이유가 있는데, 하나는 App컴포넌트를 렌더링할 때마다 useEffect의 콜백 함수는 새로운 함수를 만들고 새 인터벌을 생성하기 때문이다.
	// 다른 하나는 함수 setInterval에서 인터벌을 생성한 다음 이를 종료하지 않았기 때문이다.
	// 인터벌을 종료하는 clearInterval 함수를 호출하지 않으면 문자열 출력은 멈추지 않는다.
	// 리렌더될 때마다 새로운 인터벌이 생성되고 기존 인터벌을 종료하지 않았기 때문에 여러개의 인터벌이 중복으로 만들어져 출력 속도가 빨라지게 된다.
	// 이럴 때 사용하는 기능이 useEffect의 클린업 기능이다.
	useEffect(() => {
		const intervalID = setInterval(()=> {
			console.log("깜빡");
		}, 1000)
		// useEffect의 콜백 함수가 반환하는 함수를 클린업 함수라 한다.
		// 이 함수는 콜백 함수를 다시 호출하기 전에 실행된다.
		// 따라서 컴포넌트를 렌더링할 때마다 새 인터벌을 생성하고 기존 인터벌은 삭제한다.
		return () => {
			console.log("클린업");
			clearInterval(intervalID)
		}
	})


	// 컴포넌트의 마운트 제어
	// 컴포넌트의 마운트 시점에 실행되는 코드를 작성
	// 함수 useEffect를 하나 더 만들고 의존성 배열에는 빈 배열 전달
	// useEffect에서 빈 배열을 전달하면 컴포넌트의 마운트 시점에만 콜백함수 실행
	useEffect(()=> {
		console.log("컴포넌트 마운트");
	}, [])

  // const name1 = "James Turner";
  // const job1 = "Founder";
  // const name2 = "Luna Hall";
  // const job2 = "Developer";
  // const name3 = "Hope Carpenter";
  // const job3 = "Designer";

  return (
    <div className="App">
      {/* <Task01 /> */}
      {/* <Task02 /> */}
      {/* <Our_team name1 = {name1} job1 = {job1} name2 = {name2} job2 = {job2} name3 = {name3} job3 = {job3}/> */}
      {/* <Task03/> */}
      {/* <Task04/> */}
      {/* <Task05/> */}
      <h1>Simple Count</h1>
      <section>
        <input value={text} onChange={handleChangeText}></input>
      </section>
      <section>
        <Viewer count = {count}/>
      </section>
      <section>
        <Controller handleSetCount = {handleSetCount}/>
      </section>
    </div>
  );
}

export default App02;