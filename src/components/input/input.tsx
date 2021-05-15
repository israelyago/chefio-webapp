import React from 'react';
import './input.scss';

export enum inputVariants {
    Primary = "input--primary",
    Secondary = "input--secondary",
    Destructive = "input--destructive",
}

interface inputProps {
    text: string,
    iconSrc?: string,
    type?: inputVariants,
}

export const Input: React.FC<inputProps> = (props) => {
    const variant = props.type ? props.type : inputVariants.Primary; 
    const classes = `input ${variant}`;
    return (
        <div className={classes}>
            {(() => {
                if (props.iconSrc) {
                    return <img src={props.iconSrc} alt="" className="src"/>
                }
            })()}
            <input className="input-box" placeholder={props.text} />
        </div>
    )
}

export default Input;