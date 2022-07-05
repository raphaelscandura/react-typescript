import React from "react";
import style from './style.module.scss'

class Button extends React.Component<any, any>{
    render(){
        const {type="button",onClick} = this.props
        return (
            <button onClick={onClick} type={type} className={style.button}>
                {this.props.children}
            </button>
        )
    }
}
export default Button;