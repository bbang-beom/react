import React, { useCallback, useMemo, useReducer, useRef } from 'react';
import './App.css';
import ColorEditor from './component/ColorEditor';
import ColorList from './component/ColorList';

export const ColorStateContext = React.createContext()
export const ColorDispatchContext = React.createContext()

const mockColor = [
  {
    id: 0,
    title: "Ocean Blue",
    color: "#0070ff",
  },
  {
    id: 1,
    title: "Tomato",
    color: "#d10012",
  },
  {
    id: 2,
    title: "Lawn",
    color: "#67bf4f",
  },
  {
    id: 3,
    title: "Party Pink",
    color: "#ff00f7",
  },
]

function reducer(state, action) {
  switch(action.type) {
    case "CREATE":
      return[action.newItem, ...state]
    case "DELETE":
      return state.filter((it)=> {return it.id!==action.targetId})
    default:
      return state
  }
}

function App() {
  const [color, dispatch] = useReducer(reducer, mockColor)
  const idRef = useRef(4)

  const onDelete = useCallback((targetId) => {
    dispatch({
      type:"DELETE",
      targetId,
    })
  },[])

  const onCreate = (title, color) => {
    dispatch({
      type:"CREATE",
      newItem:{
        id:idRef.current,
        title,
        color,
      }
    })
    idRef.current+=1
  }

  const memorizedDispatches = useMemo(() => {
    return {onCreate, onDelete}
  }, [])

  return (
    <div className="App">
      <ColorStateContext.Provider value={color}>
      <ColorDispatchContext.Provider value={memorizedDispatches}>
      <ColorEditor/>
      <ColorList/>
      </ColorDispatchContext.Provider>
      </ColorStateContext.Provider>
    </div>
  );
}

export default App;
