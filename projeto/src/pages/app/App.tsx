import React, {useState} from 'react';
import Cronometer from '../../components/cronometer';
import Form from '../../components/forms';
import List from '../../components/lists';
import { TaskInterface } from '../../types/TaskInterface';
import style from './style.module.scss';

export default function App() {
  const [tasks,setTasks]= useState<TaskInterface[] | []>([]);
  const [selected,setSelected]=useState<TaskInterface>();

  function selectTask(selectedTask: TaskInterface){
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected:(task.id==selectedTask.id?true:false)
    })));
  }

  function completeTask(){
    if(selected){
      setSelected(undefined);
      setTasks(oldTasks => 
        oldTasks.map(task => {
        if(task.id==selected.id){
          return {
            ...task,
            selected: false,
            completed:true
          }
        }else{
          return task;
        }
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List 
        tasks={tasks}
        selectTask={selectTask}
      />
      <Cronometer 
        selected={selected}
        completeTask={completeTask}
      />
    </div>
  );
}