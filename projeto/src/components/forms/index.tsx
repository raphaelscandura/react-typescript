import React from "react";
import Button from "../buttons";
import './style.scss'

class Form extends React.Component{
    render() {
        return(
            <form action="" className="newTask">
                <div className="inputContainer">
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
                <div className="inputContainer">
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
                <Button/>
            </form>
        )
    }
}

export default Form;