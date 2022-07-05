import { ItemInterface } from '../../../types/ItemInterface';
import style from './style.module.scss';

export default function Item({task,time,selected,completed,id,selectTask}:ItemInterface){
    return (
        <li 
            className={`${style.item} ${selected?style.selectedItem:''}`} 
            onClick={() => selectTask(
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
                    </li>
    );
}