import React from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const RecipesList = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <View style={styles.gridItem}>
        <TouchableOpacity
          onPress={() =>
            props.onSelectRecipe(itemData.item.id, itemData.item.title)
          }>
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
    <FlatList data={props.displayedRecipies} renderItem={renderGridItem} />
  );
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

export default RecipesList;
