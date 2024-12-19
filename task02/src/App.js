import { useCallback, useReducer, useRef } from 'react';
import './App.css';
import Header from './component/Header';
import TestComp01 from './component/TestComp01';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

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
function App() {
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
  return (
    <div className="App">
      <TestComp01/>
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App;
