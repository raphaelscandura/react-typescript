import { ListInterface } from "../../types/ListInterface";
import Item from "./item";
import style from './style.module.scss';

function List({tasks,selectTask}:ListInterface){
    return (
        <aside className={style.taskList}>
            <h2>Today's studies</h2>
            <ul>
                {tasks.map((item)=>(
                    <Item 
                        selectTask={selectTask}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default List;