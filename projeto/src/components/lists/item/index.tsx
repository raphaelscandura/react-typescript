import { ItemInterface } from '../../../types/ItemInterface';
import style from './style.module.scss';

export default function Item({task,time,selected,completed,id,selectTask}:ItemInterface){
    return (
        <li 
            className={`${style.item} ${selected?style.selectedItem:''} ${completed?style.completedItem:""}`} 
            onClick={() => !completed && selectTask(
                {
                    task,
                    time,
                    selected,
                    completed,
                    id
                }
            )}
        >
            <h3>
                {task}
            </h3>
            <span>
                {time}
            </span>
            {completed && <span className={style.completed} aria-Label="Completed task!"></span>}
        </li>
    );
}