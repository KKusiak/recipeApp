import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RecipesList from "../components/RecipesList";
import { RECIPIES } from "../data/temporaryData";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
const FavoritesScreen = (props) => {
  const displayedRecipies = RECIPIES;
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName='ios-save'
          color='#000'
          onPress={() => {}}
        />
      </HeaderButtons>
    ),
  };
};
export default FavoritesScreen;
