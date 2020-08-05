import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import FilterSwitch from "../components/FilterSwitch";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../store/actions/recipes";
const FiltersScreen = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactooseFree, setIsLactooseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    dispatch(
      setFilters({
        glutenFree: isGlutenFree,
        lactooseFree: isLactooseFree,
        vegetarian: isVegetarian,
        vegan: isVegan,
      })
    );
    props.navigation.goBack(null);
  }, [isGlutenFree, isLactooseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text>Avalible filters:</Text>
      <View style={styles.switchesContainer}>
        <FilterSwitch
          text='Gluten free'
          value={isGlutenFree}
          onValueChange={setIsGlutenFree}
        />
        <FilterSwitch
          text='Lactoose free'
          value={isLactooseFree}
          onValueChange={(newValue) => setIsLactooseFree(newValue)}
        />
        <FilterSwitch
          text='Vegetarian'
          value={isVegetarian}
          onValueChange={(newValue) => setIsVegetarian(newValue)}
        />
        <FilterSwitch
          text='Vegan'
          value={isVegan}
          onValueChange={(newValue) => setIsVegan(newValue)}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filters",
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
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  switchesContainer: { width: "60%", marginVertical: 30 },
});

export default FiltersScreen;
