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

const RecipesScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedRecipies = RECIPIES.filter(
    (recipe) => recipe.categoryId.indexOf(catId) >= 0
  );
  const selectRecipeHandler = (id) => {
    props.navigation.navigate({
      routeName: "RecipieDetail",
      params: {
        recipeId: id,
      },
    });
  };
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const renderGridItem = (itemData) => {
    return (
      <View style={styles.gridItem}>
        <TouchableOpacity onPress={() => selectRecipeHandler(itemData.item.id)}>
          <ImageBackground
            source={{
              uri: itemData.item.imageUrl,
              cache: "only-if-cached",
            }}
            style={styles.img}>
            <View style={styles.header}>
              <Text style={styles.title}>{itemData.item.title}</Text>
            </View>
            <View style={styles.detailsRow}>
              <Text style={styles.details}>{itemData.item.affordability}</Text>
              <Text style={styles.details}>
                {itemData.item.duration} minutes
              </Text>
              <Text style={styles.details}>{itemData.item.complexity}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <FlatList data={displayedRecipies} renderItem={renderGridItem} />
    </View>
  );
};
RecipesScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return { headerTitle: selectedCategory.title };
};
const styles = StyleSheet.create({
  gridItem: { flex: 1, aspectRatio: 1 },
  img: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: "90%",
  },
  title: {
    margin: 0,
    paddingVertical: 5,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    textAlign: "center",
  },
  detailsRow: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  details: { margin: 0, paddingVertical: 5, fontSize: 16, color: "#fff" },
});

export default RecipesScreen;
