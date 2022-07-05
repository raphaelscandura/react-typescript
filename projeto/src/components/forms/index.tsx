import React, { useState } from "react";
import Button from "../buttons";
import style from './style.module.scss'
import { v4 as uuidvs4 } from 'uuid';
import FormInterface from "../../types/FormInterface";

export default function Form({setTasks}:FormInterface){
    const [task,setTask] = useState("");
    const [time,setTime] = useState("00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setTasks(
            oldTasks=>[
                ...oldTasks,
                {
                    task,
                    time,
                    selected:false,
                    completed:false,
                    id: uuidvs4()
                }
            ]
        )
        setTask("");
        setTime("00:00");
    }

    return(
        <form action="" className={style.newTask} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a new course
                </label>
                <input 
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={event => setTask(event.target.value)}
                    placeholder="What do you wish to study today?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Time
                </label>
                <input 
                    type="time" 
                    step="1"
                    name="time"
                    id="time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Button type="submit">
                Add
            </Button>
        </form>
    )
}