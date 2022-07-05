import React from "react";
import { ButtonInterface } from "../../types/ButtonInterface";
import style from './style.module.scss'

export default function Button({onClick,type,children}:ButtonInterface){
    return (
        <button 
            onClick={onClick} 
            type={type} 
            className={style.button}
        >
            {children}
        </button>
    )
}