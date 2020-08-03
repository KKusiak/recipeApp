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
  console.log(displayedRecipies);

  if (!Array.isArray(displayedRecipies) || displayedRecipies.length) {
    return (
      <RecipesList
        onSelectRecipe={selectRecipeHandler}
        displayedRecipies={displayedRecipies}
      />
    );
  } else {
    return (
      <View style={styles.emptyScreenText}>
        <Text>Add recipes to your favorite's list!</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  emptyScreenText: { justifyContent: "center", alignItems: "center", flex: 1 },
});

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
