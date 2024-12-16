import { useState } from 'react';
import './App.css';
import Controller from './component/Controller';
import Viewer from './component/Viewer';

function App() {
  // const name1 = "James Turner";
  // const job1 = "Founder";
  // const name2 = "Luna Hall";
  // const job2 = "Developer";
  // const name3 = "Hope Carpenter";
  // const job3 = "Designer";
    const [count, setCount] = useState(0)
    const handleSetCount = (value) => {
      setCount(count + value)
    }

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
        <Viewer count = {count}/>
      </section>
      <section>
        <Controller handleSetCount = {handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
