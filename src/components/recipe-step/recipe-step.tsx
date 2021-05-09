import React from 'react';
import './recipe-step.scss';

interface recipeStepProps {
    number: number,
    text: string,
}

export const RecipeStep: React.FC<recipeStepProps> = (props) => {
    return (
        <div className="recipe-step">
            <div className="flex flex-row step flex-start">
                <div className="step-number bold">{props.number}</div>
                <div className="step-body ms-1">
                    <div className="paragraph-2 main-text">{props.text}</div>
                </div>
            </div>
        </div>
    )
}

export default RecipeStep;