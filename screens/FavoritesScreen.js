import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RecipesList from "../components/RecipesList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { useSelector } from "react-redux";
const FavoritesScreen = (props) => {
  const availableRecipes = useSelector(
    (state) => state.recipes.favoritesRecipes
  );
  const displayedRecipies = availableRecipes;
  const selectRecipeHandler = (id, title) => {
    props.navigation.navigate({
      routeName: "FavoriteRecipeDetail",
      params: {
        recipeId: id,
        title: title,
      },
    });
  };

  return (
    <RecipesList
      onSelectRecipe={selectRecipeHandler}
      displayedRecipies={displayedRecipies}
    />
  );
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          color='#000'
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};
export default FavoritesScreen;
