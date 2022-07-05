import { TaskInterface } from '../../../types/TaskInterface';
import style from '../style.module.scss';

export default function Item({task,time,selected,completed,id}:TaskInterface){
    return (
        <li className={style.item}>
                        <h3>
                            {task}
                        </h3>
                        <span>
                            {time}
                        </span>
                    </li>
    );
}