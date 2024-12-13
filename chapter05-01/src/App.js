import './App.css';
import Body from './component/Body';
import Body2 from './component/Body2';
import Body3 from './component/Body3';
import ChildComp from './component/ChildComp';

// 컴포넌트에 값 전달
// 컴포넌트에서 다른 컴포넌트에 값을 전달해야할 때 Props를 이용한다.

// Props
// 리액트에서는 부모가 자식 컴포넌트에 단일 객체 형태로 값을 전달할 수 있다.
// 이 객체를 리액트에서는 Props(Properties)라 한다.
// 리액트에서는 보통 재사용하려는 요소를 컴포넌트로 만든다.
// 일반적으로 리액트에서 컴포넌트에 값을 전달하는 경우는 세부사항들 즉, 컴포넌트의 속성을 지정하는 경우가 대부분이다.
// 따라서 컴포넌트에 값을 전달하는 속성들이라는 점에서 Props(Properties)라 한다.

// Props로 값 전달
// Props는 부모만 자식 컴포넌트에 전달할 수 있다.
// Props는 단일 객체이다. 따라서 name프로퍼티가 추가된다.

// Props로 여러 개의 값 전달
// 구조 분해 할당으로 여러 개의 값 사용
function App() {
  // 배열 구조 분해 할당
  // const [a, b] = [1, 2]
  // 객체 구조 분해 할당
  const {c, d} = {C:1, d:2}
  console.log("구조 분해 할당", c, d);

  // 스프레드 연산자로 여러개의 값 전달

  // 기본값 설정
  const BodyProps = {
    "name" : "react",
    "age" : 11,
    "skills": ['html', 'css', 'javascript']
  }

  // Props로 컴포넌트 전달
  // Props로 자바스크립트값만 아니라 컴포넌트도 전달할 수 있다.
  // 리액트에서는 자식 컴포넌트에 또 다른 컴폰넌트를 배치하면, 배치된 컴포넌트는 자동으로 Props의 children 프로퍼티에 저장되어 전달된다.

  // 아래 <Body name과는 다른 name
  const name = "react"
  const name1 = "JSX"
  return (
    <div className="App">
      <Body3>
          <ChildComp/>
      </Body3>
      <Body name = {name} age = {11}/>
      <Body name = {name1} age = {11}/>
      {/* <Body2 name = {name} age = {10+1}/>
      <Body2 name = {BodyProps.name} age = {BodyProps.age}/> */}
      {/* 스프레드 연산자 */}
      <Body2 {...BodyProps}/>
    </div>
  );
}
export default App;
