import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { CATEGORIES, RECIPIES } from "../data/temporaryData";
import RecipesList from "../components/RecipesList";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { AntDesign } from "@expo/vector-icons";
const RecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const dispatch = useDispatch();
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
  if (displayedRecipies.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No recipes matching filters were found</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Filters")}>
          <Text style={{ color: "#3684c7", fontSize: 22 }}>Open filters</Text>
        </TouchableOpacity>
      </View>
    );
  }
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
  return {
    headerTitle: selectedCategory.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <TouchableOpacity
          onPress={() => navigationData.navigation.navigate("Filters")}>
          <AntDesign title='Filters' name='filter' size={24} color='black' />
        </TouchableOpacity>
      </HeaderButtons>
    ),
  };
};

export default RecipesScreen;
