import Button from "../buttons";
import Clock  from "./clock";
import style from "./style.module.scss"

export default function Cronometer(){
    return (
        <div className={style.cronometer}>
            <p className={style.title}>Chose a card to start the cronometer</p>
            <div className={style.clockWrapper}>
                <Clock/>
            </div>
            <Button>
                Start!
            </Button>
        </div>
    )
}