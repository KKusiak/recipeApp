import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import RecipiesNavigator from "./navigation/RecipiesNavigator";
import recipesReducer from "./store/reducers/recipes";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <RecipiesNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
