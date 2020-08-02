import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen";
import RecipiesScreen from "../screens/RecipiesScreen";
import RecipieDetailScreen from "../screens/RecipeDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FiltersScreen from "../screens/FiltersScreen";
const RecipiesNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  Recipes: RecipiesScreen,
  RecipieDetail: RecipieDetailScreen,
});

const FavoritesNavigator = createStackNavigator({
  Favorites: FavoritesScreen,
  FavoriteRecipeDetail: RecipieDetailScreen,
});

const FilterNavigator = createStackNavigator({
  Filters: FiltersScreen,
});

const RecipesFavTabNavigator = createBottomTabNavigator({
  Recipes: {
    screen: RecipiesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color='#000' />;
      },
    },
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color='#fcca03' />;
      },
    },
  },
});

const MainNavigator = createDrawerNavigator({
  Favorites: {
    screen: RecipesFavTabNavigator,
    navigationOptions: { drawerLabel: "Recipes" },
  },
  Filters: FilterNavigator,
});
export default createAppContainer(MainNavigator);
