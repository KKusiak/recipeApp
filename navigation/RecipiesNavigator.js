import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import RecipiesScreen from "../screens/RecipiesScreen";
import RecipieDetailScreen from "../screens/RecipeDetailScreen";
const RecipiesNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  Recipes: RecipiesScreen,
  RecipieDetail: RecipieDetailScreen,
});
export default createAppContainer(RecipiesNavigator);
