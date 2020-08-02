import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { RECIPIES } from "../data/temporaryData";
import { FlatList } from "react-native-gesture-handler";
import CheckBox from "@react-native-community/checkbox";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
const RecipeDetailScreen = (props) => {
  const recipeId = props.navigation.getParam("recipeId");
  const selectedRecipie = RECIPIES.find((recipie) => recipie.id === recipeId);

  const [checkBoxes, setCheckboxes] = useState(() => {
    return Array(selectedRecipie.ingridients.length).fill(false);
  });

  console.log(props);

  const renderIngredient = (itemData) => {
    return (
      <View style={styles.ingerdientsListItem}>
        <CheckBox
          value={checkBoxes[itemData.index]}
          onValueChange={(newValue) =>
            setCheckboxes((curr) => {
              const index = itemData.index;
              return Object.assign([], checkBoxes, { [index]: newValue });
            })
          }
        />
        <Text>{itemData.item}</Text>
      </View>
    );
  };
  const renderStep = (itemData) => {
    return (
      <View style={styles.stepsListItem}>
        <Text style={styles.stepItemText}>
          {itemData.index + 1}. {itemData.item}
        </Text>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.titleContainer}
        source={{
          uri: selectedRecipie.imageUrl,
          cache: "only-if-cached",
        }}></ImageBackground>
      <View style={styles.recipieContainer}>
        <View style={styles.ingerdientsContainer}>
          <Text style={styles.ingerdients}>Ingredients:</Text>
          <FlatList
            data={selectedRecipie.ingridients}
            keyExtractor={(item) => item}
            renderItem={renderIngredient}
            persistentScrollbar={true}
          />
        </View>
        <View style={styles.stepsContainer}>
          <Text style={styles.steps}>Steps:</Text>
          <FlatList
            data={selectedRecipie.steps}
            keyExtractor={(item) => item}
            renderItem={renderStep}
            persistentScrollbar={true}
          />
        </View>
      </View>
    </View>
  );
};
RecipeDetailScreen.navigationOptions = (navigationData) => {
  const title = navigationData.navigation.getParam("title");
  return {
    headerTitle: title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star-outline'
          color='#fcca03'
          onPress={() => {}}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  list: {
    borderRightColor: "#4d91ff",
    borderRightWidth: 1,
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
    flex: 1,
  },
  ingerdientsContainer: {
    width: "100%",
    borderBottomColor: "#a8a8a8",
    marginVertical: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    height: "40%",
  },
  ingerdients: {
    fontSize: 18,
  },
  steps: {
    fontSize: 18,
  },
  ingerdientsListItem: {
    flexDirection: "row",
    marginVertical: 5,
    width: "100%",
    alignItems: "center",
  },
  stepsListItem: {
    marginVertical: 5,
  },
  stepsContainer: {
    width: "100%",
    height: "50%",
  },
  stepItemText: {
    fontSize: 16,
  },
});

export default RecipeDetailScreen;
