import React from "react";
import "./recipe-details.scss";
import hearthIcon from "../../icons/svg/heart-2036065.svg";
import Ingredient from "../ingredient/ingredient";
import RecipeStep from "../recipe-step/recipe-step";

interface recipeDetailsProps {}

export const RecipeDetails: React.FC<recipeDetailsProps> = () => {
  const classes = `recipe-details`;
  return (
    <div className={classes}>
      <h2>Cacao Maca Walnut Milk</h2>
      <div className="paragraph-2">Food | 60 mins</div>
      <div className="flex space-between">
        <div className="flex flex-center">
          <div className="rounded">
            <img
              src="https://media.acceledent.com/wp-content/uploads/2013/08/19094215/shutterstock_140910247-300x201.jpg"
              alt=""
            />
          </div>
          <h2 className="ms-0-5">Elena Shelby</h2>
        </div>

        <div className="flex flex-center">
          <div className="hearth-icon">
            <img src={hearthIcon} alt="" />
          </div>
          <h2 className="ms-0-5">273 Likes</h2>
        </div>
      </div>
      <hr />
      <h2>Description</h2>
      <div className="paragraph-2">
        Your recipe has been uploaded, you can see it on your profile. Your
        recipe has been uploaded, you can see it on your
      </div>
      <hr className="mt-1" />
      <h2>Ingredients</h2>
      <div className="grid gap-0-5 mb-0-5">
        <Ingredient text="300ml de Leite" />
        <Ingredient text="3 Colheres de Sopa de Açúcar" />
        <Ingredient text="1/2 Colher de Sopa de Sal" />
        <Ingredient text="1 Colher de Sopa de Margarina" />
        <Ingredient text="50ml de Óleo" />
        <Ingredient text="1 Sache de Fermento Para Pão (10g)" />
        <Ingredient text="550g de Farinha de Trigo" />
      </div>
      <hr />
      <h2>Steps</h2>
      <div className="grid gap-1">
        <RecipeStep
          number={1}
          text="Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your"
        />
        <RecipeStep
          number={2}
          text="Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your"
        />
        <RecipeStep
          number={3}
          text="Your recipe has been uploaded, you can see it on your profile. Your recipe has been uploaded, you can see it on your"
        />
      </div>
    </div>
  );
};

export default RecipeDetails;
