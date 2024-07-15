import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Button } from "react-native";
import RowText from "./RowText";
import { WeatherType } from "../utilities/WeatherType";

// Sample data
const temp = 10;
const temp_current = 8;
const high = 12;
const low = 6;

const CurrentWeather = ({ navigation}) => {
  const {
    wrapperStyle,
    containerStyle,
    tempStyle,
    feelStyle,
    highLowStyle,
    highLowWrapperStyle,
    messageStyle,
    bodyWrapperStyle,
    buttonRowStyle,
    buttonContainerStyle,
    buttonStyle
  } = styles;

  // const {main:{temp, feels_like, temp_max, temp_min}, weather} = weatherData;
  // const weather_condition_ = weather[0].main;

  return (
    <SafeAreaView style={wrapperStyle}>
      <View style={containerStyle}>
        <Text style={tempStyle}>{temp_current}°</Text>
        <Text style={feelStyle}>Feels Like {temp}°</Text>
      </View>
      <RowText
        message1={`High: ${high}`}
        message2={`Low: ${low}`}
        message1Style={highLowStyle}
        message2Style={highLowStyle}
        containerStyles={highLowWrapperStyle}
      />
      <RowText
        message1={"It's Sunny"}
        message2={WeatherType["Clear"].message}
        message1Style={messageStyle}
        message2Style={messageStyle}
        containerStyles={bodyWrapperStyle}
      />
      <View style={buttonRowStyle}>
        <View style={buttonContainerStyle}>
          <Button 
            title="Go to Upcoming Weather"
            onPress={() => navigation.navigate('UpcomingWeather')}
            color={buttonStyle.color}
          />
        </View>
        <View style={buttonContainerStyle}>
          <Button 
            title="Go to City"
            onPress={() => navigation.navigate('City')}
            color={buttonStyle.color}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    flex: 1,
    backgroundColor: "orange",
    justifyContent: "space-between",
    paddingVertical: 50,
  },
  containerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  tempStyle: {
    fontSize: 50,
    color: "black",
    fontWeight: "bold",
    textShadowRadius: 10,
  },
  feelStyle: {
    fontSize: 28,
    color: "black",
    fontWeight: "bold",
    textShadowRadius: 10,
  },
  highLowWrapperStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  highLowStyle: {
    padding: 20,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  bodyWrapperStyle: {
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40,
  },
  messageStyle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black",
    textShadowRadius: 5,
  },
  buttonRowStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "rgba(255, 165, 0, 0.8)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  buttonContainerStyle: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonStyle: {
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});

export default CurrentWeather;
