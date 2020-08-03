import React from "react";
import { View } from "react-native";
import { CATEGORIES, RECIPIES } from "../data/temporaryData";
import RecipesList from "../components/RecipesList";
import { useSelector } from "react-redux";
const RecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const availableRecipes = useSelector(
    (state) => state.recipes.filteredRecipes
  );

  const displayedRecipies = availableRecipes.filter(
    (recipe) => recipe.categoryId.indexOf(catId) >= 0
  );
  const selectRecipeHandler = (id, title) => {
    props.navigation.navigate({
      routeName: "RecipieDetail",
      params: {
        recipeId: id,
        title: title,
      },
    });
  };
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return (
    <View style={{ flex: 1 }}>
      <RecipesList
        displayedRecipies={displayedRecipies}
        onSelectRecipe={selectRecipeHandler}
      />
    </View>
  );
};
RecipesScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return { headerTitle: selectedCategory.title };
};

export default RecipesScreen;
