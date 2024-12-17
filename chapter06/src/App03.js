// 클린업을 이용해 컴포넌트 언마운트 제어
import { useEffect, useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Even from './component/Even';
import Viewer from './component/Viewer';


function App03() {

  const [count, setCount] = useState(0)
  const handleSetCount = (value) => {
    setCount(count + value)
  }

  const [text,setText]=useState("")
  const handleChangeText=(e)=>{
    setText(e.target.value)
  }

  useEffect(()=> {
    console.log("count 업데이트: ", count, text)
  }, [count, text])

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
				{count%2===0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount = {handleSetCount}/>
      </section>
    </div>
  );
}

export default App03;