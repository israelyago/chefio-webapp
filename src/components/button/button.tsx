import React from 'react';
import './button.scss';

export enum ButtonVariants {
    Primary = "button--primary",
    Secondary = "button--secondary",
    Neutral = "button--neutral",
    Destructive = "button--destructive",
}

interface ButtonProps {
    text: string,
    type?: ButtonVariants,
}

export const Button: React.FC<ButtonProps> = (props) => {
    const variant = props.type ? props.type : ButtonVariants.Primary; 
    const classes = `button ${variant}`;
    return (
        <div className={classes}>{ props.text }</div>
    )
}

export default Button;