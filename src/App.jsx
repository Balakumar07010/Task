import React, { createContext, useState, useEffect } from "react";
import { RecipeList } from "./components/RecipeList ";
import { FetchRecipes } from "./components/FetchRecipes ";
import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import { Filter } from "./components/Filter";
import { Modal } from "./components/Modal";

export const data = createContext();

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchVal, setSearchVal] = useState("");
  const [fav, setFav] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function loadRecipes() {
      const data = await FetchRecipes("pasta");
      setRecipes(data);
      setLoading(false);
    }
    loadRecipes();
    recipes.map(
      (item, index) => (
        Object.defineProperty(item.recipe, "fav", { value: false }),
        Object.defineProperty(item.recipe, "id", { value: index })
      )
    );
  }, []);
  // useEffect(() => {
  //   recipes.map(
  //     (item, index) => (
  //       Object.defineProperty(item.recipe, "fav", { value: false }),
  //       Object.defineProperty(item.recipe, "id", { value: index })
  //     )
  //   );
  //   console.log(recipes);
  // }, [recipes]);

  const notFilled = (id) => {
    setRecipes(
      recipes.map((item) =>
        item.recipe.id === id
          ? { ...item, recipe: { ...item.recipe, fav: true } }
          : item
      )
    );
    // Also update favorites list
    setFav([...fav, recipes.find((item) => item.recipe.id === id)]);
  };
  console.log(fav);

  const handleSearch = (e) => {
    setSearchVal(e.target.value);
    if (e.target.value === "") {
      async function reloadRecipes() {
        const data = await FetchRecipes("pasta"); // Reload default recipes
        setRecipes(data);
      }
      reloadRecipes();
    }
    const filteredRecipes = recipes.filter((item) =>
      item.recipe.label.toLowerCase().includes(searchVal.toLowerCase())
    );
    // filteredRecipes.length > 0 ? setRecipes(filteredRecipes):"";
  };
  const submitSearch = () => {
    const filteredRecipes = recipes.filter((item) =>
      item.recipe.label.toLowerCase().includes(searchVal.toLowerCase())
    );
    setRecipes(filteredRecipes);
  };
  const handleFilter = (type) => {
    // setFilterType(type);
    // const filteredRecipes = filterType
    //   ? recipes.filter((item) => item.recipe.mealType.includes(filterType))
    //   : recipes;
    // setRecipes(filteredRecipes);
  };

  return (
    <data.Provider
      value={{
        recipes,
        setRecipes,
        setLoading,
        searchVal,
        setSearchVal,
        handleSearch,
        submitSearch,
        notFilled,
        handleFilter,
        selectedRecipe,
        openModal,
        setIsModalOpen,
        closeModal,
        fav,
        setFav,
      }}
    >
      <div className="App font-display">
        {/* Loading Event  */}
        {/* Loading event throughly run if get a data in a server the will stopped */}
        {loading == true ? (
          <div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
              <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full" />
            </div>
            <p>Loading...</p>
          </div>
        ) : (
          <div>
            <div
              className={`transition-all duration-500 ease-in-out transform sticky top-0 z-10 ${
                loading
                  ? "opacity-0 -translate-y-10"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <Nav />
            </div>
            {isModalOpen && <Modal />}
            <div>
              <Search />
            </div>
            {/* <div>
              <Filter />
            </div> */}
            <div
              className={`transition-all duration-700 ease-in-out transform sticky top-0  ${
                loading
                  ? "opacity-0 -translate-y-10"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <RecipeList />
            </div>
          </div>
        )}
      </div>
    </data.Provider>
  );
}

export default App;
