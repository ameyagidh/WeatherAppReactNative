import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

// c939f1ed706d7d29a153f7a50bc8b1ff
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

let temp = 10;
let temp_current = 8;
let high = 12;
let low = 6;
const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Text style= {styles.temp}>{temp_current}°</Text>
        <Text style={styles.feel}>Feels Like {temp}°</Text>
          <Text style={styles.highLow}>High: {high}°</Text>
          <Text style={styles.highLow}>Low: {low}°</Text>
        </View>
        <View style={styles.bodyWrapper}>
          <Text style={styles.description}>Its Sunny</Text>
          <Text style={styles.message}>Its a perfect weather</Text>
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
  highLow:{
    color: "black",
    fontSize: 20,
  },
  highLowWrapper:{
    flexDirection: "row",
  },
  bodyWrapper:{
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  description:{
    fontSize:23,
  },
  message:{
    fontSize: 23,
  },
});


export default CurrentWeather;