import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { CATEGORIES, RECIPIES } from "../data/temporaryData";
import RecipesList from "../components/RecipesList";

const RecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedRecipies = RECIPIES.filter(
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
