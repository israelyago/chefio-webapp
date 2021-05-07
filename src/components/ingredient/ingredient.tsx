import React from 'react';
import './ingredient.scss';
import checkIcon from '../../icons/svg/check.svg';

interface ingredientProps {
    text: string,
}

export const Ingredient: React.FC<ingredientProps> = (props) => {
    return (
        <div className="flex ingredient">
            <div className="check-icon">
                <img src={checkIcon} alt=""/>
            </div>
            <div className="ms-0-5 paragraph-2 main-text bold">{props.text}</div>
        </div>
    )
}

export default Ingredient;