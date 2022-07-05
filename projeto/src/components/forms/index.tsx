import React from "react";
import Button from "../buttons";
import style from './style.module.scss'
import { TaskInterface } from "../../types/TaskInterface";

class Form extends React.Component<{setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>}>{
    state ={
        task:"",
        time:"00:00"
    }

    addTask(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        this.props.setTasks(oldTasks=>[...oldTasks,{...this.state}])
    }

    render() {
        return(
            <form action="" className={style.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add a new course
                    </label>
                    <input 
                        type="text"
                        name="task"
                        id="task"
                        value={this.state.task}
                        onChange={event => this.setState({...this.state,task: event.target.value})}
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
                        value={this.state.time}
                        onChange={event => this.setState({...this.state,time: event.target.value})}
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
}

export default Form;