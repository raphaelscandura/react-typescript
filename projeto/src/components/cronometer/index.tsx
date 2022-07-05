import Button from "../buttons";
import Clock  from "./clock";
import style from "./style.module.scss"
import { CronometerInterface } from "../../types/CronometerInterface";
import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";

export default function Cronometer({selected}:CronometerInterface){
    const[time,setTime] = useState<number>();
    
    useEffect(()=>{
        if(selected?.time){
            setTime(timeToSeconds(selected.time));
        }
    },[selected])

    function countdown(counter:number=0){
        setTimeout(()=>{
            setTime(counter-1)
            return countdown(counter-1)
        },1000);
    }

    return (
        <div className={style.cronometer}>
            <p className={style.title}>Chose a card to start the cronometer</p>
            <div className={style.clockWrapper}>
                <Clock
                    time={time}
                />
            </div>
            <Button onClick={()=>countdown(time)}>
                Start!
            </Button>
        </div>
    )
}