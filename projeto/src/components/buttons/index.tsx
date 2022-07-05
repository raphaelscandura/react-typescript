import React from "react";
import style from './style.module.scss'

class Button extends React.Component<any, any>{
    render(){
        return (
            <button className={style.button}>
                {this.props.children}
            </button>
        )
    }
}
export default Button;