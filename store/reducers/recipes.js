import { RECIPIES } from "../../data/temporaryData";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/recipes";

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
    case SET_FILTERS: {
      const appliedFilters = action.filters;
      const filteredRecipes = state.recipes.filter((recipe) => {
        if (appliedFilters.glutenFree && !recipe.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactooseFree && !recipe.isLactooseFree) {
          return false;
        }
        if (appliedFilters.vegetarian && !recipe.isVegetarian) {
          return false;
        }
        if (appliedFilters.vegan && !recipe.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredRecipes: filteredRecipes };
    }
    default:
      return state;
  }
};
export default recipesReducer;
