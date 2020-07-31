import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { RECIPIES } from "../data/temporaryData";
import { FlatList } from "react-native-gesture-handler";
const RecipeDetailsScreen = (props) => {
  const recipeId = props.navigation.getParam("recipeId");
  const selectedRecipie = RECIPIES.find((recipie) => recipie.id === recipeId);
  const renderIngredient = (itemData) => {
    return <Text>* {itemData.item}</Text>;
  };
  const renderStep = (itemData) => {
    return <Text>{itemData.item}</Text>;
  };
  return (
    <View>
      <ImageBackground
        style={styles.titleContainer}
        source={{
          uri: selectedRecipie.imageUrl,
          cache: "only-if-cached",
        }}>
        <Text style={styles.title}>{selectedRecipie.title}</Text>
      </ImageBackground>
      <View style={styles.recipieContainer}>
        <View style={styles.ingerdientsContainer}>
          <Text style={styles.ingerdients}>Ingredients:</Text>
          <FlatList
            data={selectedRecipie.ingridients}
            keyExtractor={(item) => item}
            renderItem={renderIngredient}
          />
        </View>
        <View style={styles.stepsContainer}>
          <Text style={styles.steps}>Steps:</Text>
          <FlatList
            data={selectedRecipie.steps}
            keyExtractor={(item) => item}
            renderItem={renderStep}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleContainer: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.5)",
    fontWeight: "bold",
    fontSize: 24,
  },
  recipieContainer: {
    paddingHorizontal: 20,
  },
  ingerdientsContainer: {
    width: "100%",
    borderBottomColor: "#a8a8a8",
    marginVertical: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  ingerdients: {
    fontSize: 18,
  },
  steps: {
    fontSize: 18,
  },
});

export default RecipeDetailsScreen;
