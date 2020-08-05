import React from "react";
import { View, StyleSheet, Text, Switch } from "react-native";

const FilterSwitch = (props) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.text}>{props.text}</Text>
      <Switch
        value={props.value}
        onValueChange={(newValue) => props.onValueChange(newValue)}
        thumbColor={"#f4f4f4"}
        trackColor={{ false: "#a8a8a8", true: "#3684c7" }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  switchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default FilterSwitch;
