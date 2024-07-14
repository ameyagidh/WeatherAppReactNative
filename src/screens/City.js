import React from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground, SafeAreaView, Button } from "react-native";
import IconText from "./IconText";

const City = ({ navigation }) => {
  const {
    container,
    cityName,
    cityText,
    countryName,
    populationWrapper,
    populationText,
    riseSetText,
    riseSetWrapper,
    imageLayout,
    rowLayout,
    buttonRowStyle,
    buttonContainerStyle,
    buttonText,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={require("../assets/architecture-1868667_1920.jpg")} style={imageLayout}>
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText iconName={"user"} iconColor={"red"} bodyText={"Population: 8000"} bodyTextStyles={populationText} />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText iconName={"sunrise"} iconColor={"white"} bodyText={"Sunrise at 6:00:00 am"} bodyTextStyles={riseSetText} />
          <IconText iconName={"sunset"} iconColor={"white"} bodyText={"Sunset at 7:00:00 pm"} bodyTextStyles={riseSetText} />
        </View>

        <View style={buttonRowStyle}>
          <View style={buttonContainerStyle}>
            <Button
              title="Current Weather"
              onPress={() => navigation.navigate('CurrentWeather')}
              color={buttonText.color}
            />
          </View>
          <View style={buttonContainerStyle}>
            <Button
              title="Upcoming Weather"
              onPress={() => navigation.navigate('UpcomingWeather')}
              color={buttonText.color}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  countryName: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  cityText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  populationWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  riseSetWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonRowStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  buttonContainerStyle: {
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
});

export default City;
