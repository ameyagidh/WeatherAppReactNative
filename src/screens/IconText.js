import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";


const IconText = (props) => {
  const { iconName, iconColor, bodyText, bodyTextStyles } = props;
  const {container, text_style} = styles;

  return (
    <View style={styles.container}>
      {/* <Feather name={iconName} size={50} color={iconColor} /> */}
      <Text style={[text_style, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  text_style: {
    fontWeight: "bold",
  },
});

export default IconText;
