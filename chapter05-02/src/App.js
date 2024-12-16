import './App.css';
import Body from './component/Body';
import EventObj from './component/EventObj';
import Focus from './component/Focus';
import ManyInput from './component/ManyInput';
import RefHook from './component/RefHook';
import StateComp from './component/StateComp';

// 이벤트 처리
// 이벤트: 웹 페이지에서 일어나는 사용자의 행위
// 리액트의 이벤트 핸들링
// 리액트 이벤트 핸들링 특징
// 1. 리액트는 카멜 케이스 문법에 따라 onClick으로 표기
// 2. onClick = {}문법으로 이벤트 핸들러 설정
// 3. 이벤트 핸들러를 설정할 때 함수 호출의 결과값을 전달하는 것이 아니라 콜백 함수처럼 함수 그 자체를 전달
// 4. 리액트에서는 소괄호 없이 함수 이름만 명시

// 이벤트 객체 사용
// 리액트에서 이벤트가 발생하면 이벤트 핸들러에게 이벤트 객체를 매개변수로 전달

// 컴포넌트와 상태
// 지금까지는 값이 변하지 않는 정적인 리액트 컴포넌트를 생성했다.
// 지금부터는 사용자의 행위나 시간 변동에 따라 값이 변하는 동적인 리액트 컴포넌트를 생성할 것이다.
// 이를 위해 리액트의 핵심 기증 중 하나인 State를 알아야한다.

// State(상태)
// 어떤 사물의 형편이나 모양
// 리액트 컴포넌트는 State값에 따라 다른 결과를 렌더링한다.
function App() {
  return (
    <div className="App">
      <Body/>
      <EventObj/>
      <StateComp/>
      {/* <InputManage/> */}
      <ManyInput/>
      {/* <PropsState/> */}
      <RefHook/>
      <Focus/>
    </div>
  );
}

export default App;
