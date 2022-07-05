import React from "react";
import Button from "../buttons";
import style from './style.module.scss'

class Form extends React.Component{
    render() {
        return(
            <form action="" className={style.newTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add a new course
                    </label>
                    <input 
                        type="text"
                        name="task"
                        id="task"
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
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button>
                    Add
                </Button>
            </form>
        )
    }
}

export default Form;