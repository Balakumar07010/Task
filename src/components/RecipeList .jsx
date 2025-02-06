import React, { useContext, useEffect, useState } from "react";
import { data } from "../App";

export const RecipeList = () => {
  const { recipes, notFilled, openModal, fav, setFav } = useContext(data);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-12 tablet:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 ">
        {recipes.map((recipe, index) => (
          <div
            className="border-none rounded-lg overflow-hidden shadow-6xl mb-4 hover:transform hover:-translate-y-4 hover:scale-110 cursor-pointer transition-all duration-500 relative"
            key={index}
          >
            <img
              src={recipe.recipe.image}
              alt={recipe.recipe.label}
              className="w-full h-40 object-cover rounded-md"
              onClick={() => openModal(recipe.recipe)}
            />
            <h3 className="text-lg font-semibold mt-2 ms-2 ">
              {recipe.recipe.label.length > 30
                ? recipe.recipe.label.slice(0, 30) + "..."
                : recipe.recipe.label}
            </h3>
            <div className="w-6 absolute right-2 transform -translate-y-6">
              <button onClick={() => setFav(true)}>
                <img src="./heart.png"></img>
              </button>
            </div>
            {fav && (
              <div className="w-6 absolute right-2 transform -translate-y-6">
                <button onClick={() => setFav(false)} className="z-20">
                  <img src="./fillheart.png"></img>
                </button>
              </div>
            )}
            <div className="flex gap-4 m-2">
              <p className="bg-secondary text-black py-1 px-2 rounded-lg">
                <span className="font-semibold">Calories:</span>
                {Math.round(recipe.recipe.calories)}
              </p>
              <p className="bg-secondary text-black py-1 px-2 rounded-lg ">
                <span className="font-semibold">Ingredients:</span>
                {recipe.recipe.ingredients.length}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
