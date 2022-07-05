import React, {useState} from 'react';
import Cronometer from '../../components/cronometer';
import Form from '../../components/forms';
import List from '../../components/lists';
import { TaskInterface } from '../../types/TaskInterface';
import style from './style.module.scss';

function App() {
  const [tasks,setTasks]= useState<TaskInterface[] | []>([{
    task: "React",
    time: "02:00:00"
},{
  task: "Javascript",
  time: "01:00:00"  
}]);
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Cronometer/>
    </div>
  );
}

export default App;
