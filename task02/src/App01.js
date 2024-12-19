import React, { useCallback, useMemo, useReducer, useRef } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';

// 컴포넌트 트리에 데이터 공급
// Context
// 리액트 컴포넌트 트리 전체를 대상으로 데이터를 공급하는 기능
// Context는 Props Drilling 문제를 해결하기 위해 사용한다.
// 리액트에서는 자식의 자식 즉, 트리에서 2단계 이상 떨어져있는 컴포넌트에 직접 데이터를 전달하는 것이 불가능하다.
// 원하는 목적지까지 데이터를 전달하기 위해 경로상에 있는 모든 컴포넌트에 일일이 Props를 전달해야 한다.
// 이를 Props Drilling문제라 한다.

// Context
// 리액트에서 Context는 같은 문맥 아래에 있는 컴포넌트 그룹에 데이터를 공급하는 기능의 의미
// Context를 이용하면 단계마다 일일이 Props를 전달하지 않고도 컴포넌트 트리 전역에 데이터를 공급할 수 있어
// Props Drilling문제를 해결할 수 있다.

// ContextAPI
// Context를 만들고 다루는 리액트 기능

// Context 생성
// import React from "react"
// const MyContext = React.createContext(defaultValue)
// 인수로 전달하는 값은 Context의 기본값으로 생략할 수 있다.

// Context에 데이터 공급
// Context에서 데이터를 공급하려면 Context.Provider기능을 사용하면 된다.
// Provider 컴포넌트는 Props로 공급할 데이터를 받아 컴포넌트 트리에서 자신보다 하위에 있는 모든 컴포넌트에 데이터를 공급한다.

// Context가 공급하는 데이터 사용
// useContext는 특정 Context가 공급하는 데이터를 불러오는 리액트 훅이다.

// Context로 [할 일 관리]앱 리팩토링
// Context를 적용하는 방법
// App에서 TodoItem까지 Props가 전달되는 구조를 살펴보면, App에서 전달하는 Props중 함수 onDelete와 onUpdate는 TodoList에서는 사용하지 않고 TodoItem컴포넌트에서 사용한다.
// 이 TodoItem이 Props를 사용하려면, 리액트의 데이터 전달 구조 특성상 TodoList컴포넌트를 거쳐서 전달해야한다.

// . TodoContext를 만들어 데이터 공급
// import React from "react"

// . TodoContext 생성
// Context는 반드시 컴포넌트 밖에서 생성해야한다.

export const TodoStateContext = React.createContext()
export const TodoDispatchContext = React.createContext()

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습",
    createDate: new Date().getTime(),
  },
]

// [할 일 관리] 앱 업그레이드
// 함수 useReducer로 상태 변화 코드를 컴포넌트와 분리해 [할 일 관리]앱 업그레이드
function reducer(state, action) {
    // 상태 변환 코드
    switch(action.type) {
      case "CREATE":
        return[action.newItem,...state]
      case "UPDATE":
        return state.map((it)=>
          it.id===action.targetId?{...it,isDone:!it.isDone}:it
        )
      case "DELETE":
        return state.filter((it)=>it.id!==action.targetId)
      default:
        return state
    }
}
// App컴포넌트의 함수 onUpdate와 onDelete를 useCallback으로 메모이제이션해 이 함수들을 다시 생성하지 않도록 만든다.
// 다시 말해 TodoItem이 불필요한 상황에서 리렌더되지 않도록한다.
function App01() {
  const [todo, dispatch] = useReducer(reducer, mockTodo)
  const idRef = useRef(3)

  const onDelete = useCallback((targetId) => {
    dispatch({
      type:"DELETE",
      targetId,
    })
  },[])


  const onUpdate =  useCallback((targetId) => {
    dispatch({
      type:"UPDATE",
      targetId,
    })
  }, [])
  // 할 일 아이템 추가
  // dispatch를 호출, 인수로 할 일 정보를 담은 action객체 전달
  const onCreate = (content) => {
    dispatch({
      type:"CREATE",
      newItem:{
        id:idRef.current,
        content,
        isDone:false,
        createdDate:new Date().getTime(),
      }
    })
    idRef.current+=1
  }
  // const onCreate = (content) => {
  //   const newItem = {
  //     id: idRef.current,
  //     content,
  //     isDone: false,
  //     createDate: new Date().getTime(),
  //   };
  //   setTodo([newItem, ...todo])
  //   idRef.current += 1
  // }

  // useReducer가 반환하는 함수 dispatch는 함수 reducer를 호출하는데, 이 reducer는 항상 최신 State를 인수로 받는다.
  // 따라서 State 관리 도구로 useState가 아닌 useReducer를 이용할 때는 함수형 업데이트를 사용하지 않아도 된다.
  // 따라서 TodoItem 컴포넌트에 함수로 전달되는 Props인 onUpdate와 onDelete만 다시 생성하지 않도록 useCallback을 이용해 최적화한다.

  // 데이터 공급
  // Provider를 배치해 데이터 공급 설정
  // Props(value)를 객체로 설정, 이 객체에는 Context에 소속된 컴포넌트에 공급할 모든 값을 담는다.
  // .TodoContext하위에 배치한 컴포넌트는 이제 이Context에서 데이터를 받으므로 굳이 다른 경로로 Props를 받을 필요가 없다.

  // 할 일이 추가될 때 todo가 변하면, TodoContext.Provider에서 전달하는 모든 Props 또한 바뀌게 되고
  // onCreate, onUpdate, onDelete만 받는 컴포넌트도 불필요한 리렌더가 발생한다.
  // 문제의 원인은 State변수 todo와 onCreate, onUpdate
  const memoizedDispatches=useMemo(()=>{
    return {onCreate, onUpdate,onDelete}
  },[])
  return (
    <div className="App">
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <TodoList01 />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App01;
