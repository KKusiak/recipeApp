import { RECIPIES } from "../../data/temporaryData";
import { TOGGLE_FAVORITE } from "../actions/recipes";

const initalState = {
  recipes: RECIPIES,
  filteredRecipes: RECIPIES,
  favoritesRecipes: [],
};

const recipesReducer = (state = initalState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoritesRecipes.findIndex(
        (recipe) => recipe.id === action.recipeId
      );
      if (existingIndex >= 0) {
        const updatedFavRecipes = [...state.favoritesRecipes].filter(
          (recipe) => recipe.id !== action.recipeId
        );
        return { ...state, favoritesRecipes: updatedFavRecipes };
      } else {
        return {
          ...state,
          favoritesRecipes: [
            ...state.favoritesRecipes,
            state.recipes.find((recipe) => recipe.id === action.recipeId),
          ],
        };
      }
    default:
      return state;
  }
};
export default recipesReducer;
