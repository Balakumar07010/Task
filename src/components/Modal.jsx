import React, { useContext } from "react";
import { data } from "../App";

export const Modal = () => {
  const { selectedRecipe, closeModal } = useContext(data);
  if (!selectedRecipe) return null;
  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    //   <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
    //     <button className="absolute top-4 right-4 text-xl" onClick={closeModal}>
    //       ✖
    //     </button>
    //     {/* <h2 className="text-2xl font-bold">{recipe.label}</h2>
    //     <img
    //       src={recipe.image}
    //       alt={recipe.label}
    //       className="w-full my-4 rounded"
    //     />
    //     <p>
    //       <strong>Meal Type:</strong> {recipe.mealType.join(", ")}
    //     </p>
    //     <p>
    //       <strong>Ingredients:</strong>
    //     </p>
    //     <ul className="list-disc pl-6">
    //       {recipe.ingredients.map((ing, index) => (
    //         <li key={index}>{ing.text}</li>
    //       ))}
    //     </ul> */}
    //   </div>
    // </div>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transprant bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg relative">
        <h2 className="text-2xl font-bold">{selectedRecipe.label}</h2>
        <button className="absolute top-4 right-4 text-xl" onClick={closeModal}>
          ✖
        </button>
        <div className="">
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.label}
            className="w-full h-40 object-cover my-4 rounded"
          />
        </div>
        <p>
          <strong>Meal Type:</strong> {selectedRecipe.mealType.join(", ")}
        </p>
        <p>
          <strong>Ingredients:</strong>
        </p>
        <ul className="list-disc pl-6">
          {selectedRecipe.ingredients.map((ing, index) => (
            <li key={index}>{ing.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
