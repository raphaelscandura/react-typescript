import { TaskInterface } from "../../types/TaskInterface";
import Item from "./item";
import style from './style.module.scss';

function List({tasks}:{tasks: TaskInterface[]}){
    return (
        <aside className={style.taskList}>
            <h2>Today's studies</h2>
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