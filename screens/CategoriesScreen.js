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
import { CATEGORIES } from "../data/temporaryData";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    url = `../assets/img/${itemData.item.title}.jpg`;
    return (
      <View style={styles.gridItem}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate({
              routeName: "Recipes",
              params: {
                categoryId: itemData.item.id,
              },
            })
          }>
          <ImageBackground
            source={{
              uri: itemData.item.imgURL,
              cache: "only-if-cached",
            }}
            style={styles.img}>
            <Text style={styles.overlayText}>{itemData.item.title}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    </View>
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Categories",
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

const styles = StyleSheet.create({
  gridItem: { flex: 1, aspectRatio: 1 },
  img: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    margin: 0,
    padding: 0,
    fontSize: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "100%",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CategoriesScreen;
