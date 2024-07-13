import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

// Sample data
let temp = 10;
let temp_current = 8;
let high = 12;
let low = 6;

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Text style={styles.temp}>{temp_current}°</Text>
        <Text style={styles.feel}>Feels Like {temp}°</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: {high}°</Text>
          <Text style={styles.highLow}>Low: {low}°</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}>It's a perfect weather</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "orange",
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  temp: {
    fontSize: 50,
    color: "black",
  },
  feel: {
    fontSize: 28,
    color: "black",
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  highLow: {
    color: "black",
    fontSize: 20,
    marginHorizontal: 10,
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 23,
  },
  message: {
    fontSize: 23,
  },
});

export default CurrentWeather;
