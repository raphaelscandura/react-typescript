import React, { useState } from "react";
import Item from "./item";
import style from './style.module.scss';

function List(){
    const [tasks,setTasks]= useState([{
        task: "React",
        time: "02:00:00"
    },{
      task: "Javascript",
      time: "01:00:00"  
    }]);

    return (
        <aside className={style.taskList}>
            <h2 onClick={() => {
                setTasks([...tasks,{task:"Test",time:"04:00:00"}])
            }}>Today's studies</h2>
            <ul>
                {tasks.map((item,index)=>(
                    <Item 
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default List;