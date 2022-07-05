import { secondToTime } from '../../../common/utils/time'
import { ClockInterface } from '../../../types/ClockInterface'
import style from './style.module.scss'

export default function Clock({time=0}:ClockInterface){

    let timeAux=secondToTime(time);

    return (
        <>
            <span className={style.clockNumber}>{timeAux[0]}</span>
            <span className={style.clockNumber}>{timeAux[1]}</span>
            <span className={style.clockDivision}>:</span>
            <span className={style.clockNumber}>{timeAux[2]}</span>
            <span className={style.clockNumber}>{timeAux[3]}</span>
        </>
    )
}