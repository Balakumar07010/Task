import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="w-full bg-primary ">
      <div className="mx-2 py-2 flex ">
        <div id="header" className="flex items-center gap-x-2">
          <div id="logo" className="h-8 w-8 md:h-12 md:w-12 rounded-full ">
            <img
              src="./knifeLogo.png"
              alt="logo"
              className="w-full h-full object-cover  "
            />
          </div>
          <div id="head">
            <h2 className="text-2xl md:text-2xl text-white font-semibold  ">
              Food Recipes
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
