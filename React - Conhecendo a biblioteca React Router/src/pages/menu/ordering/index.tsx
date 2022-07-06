import styles from "./ordering.module.scss"
import options from "./options.json"
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import OrderingInterface from "types/OrderingInterface";

export default function Ordering({ordering,setOrdering}:OrderingInterface){
    const [open,setOpen] = useState(false);
    const orderingName = ordering && options.find(option => option.value === ordering)?.name;
    return (
        <button 
            className={classNames({
                [styles.ordering]:true,
                [styles["ordering--active"]]: ordering !== "" 
            })} 
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
        >
            <span>{orderingName || "Order by"}</span>
            {open?<MdKeyboardArrowUp/>:<MdKeyboardArrowDown/>}
            <div className={
                classNames({
                    [styles.ordering_options]:true,
                    [styles["ordering_options--active"]]:open
                })
            }>
                {options.map(option=>(
                    <div 
                        className={styles.ordering_option} 
                        key={option.value}
                        onClick={()=> setOrdering(option.value)}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    )
}