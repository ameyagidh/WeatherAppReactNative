import React from "react";
import { SafeAreaView, View, StyleSheet, Text, FlatList, StatusBar, ImageBackground, Button } from "react-native";
import ListItem from "./ListItem";

const Data = [
  {
    dt_txt: "2024-02-18 12:00:00",
    main: { temp_max: 8.55, temp_min: 7.55 },
    weather: [{ main: "clear" }],
  },
  {
    dt_txt: "2024-03-08 02:00:00",
    main: { temp_max: 9.5, temp_min: 5.55 },
    weather: [{ main: "sunny" }],
  },
  {
    dt_txt: "2024-09-02 04:00:00",
    main: { temp_max: 8.9, temp_min: 2.55 },
    weather: [{ main: "Rainy" }],
  },
];

const Empty = () => {
  return (
    <View style={styles2.emptyContainer}>
      <Text style={styles2.emptyText}>No Data</Text>
    </View>
  );
};

const UpcomingWeather = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <ListItem
      dt_txt={item.dt_txt}
      min_={item.main.temp_min}
      max_={item.main.temp_max}
      weather_condition_={item.weather[0].main}
    />
  );

  const { container, imageStyle, header, listContainer, buttonRowStyle, buttonContainerStyle, buttonStyle } = styles2;

  return (
    <SafeAreaView style={container}>
      <Text style={header}>Upcoming Weather</Text>
      <ImageBackground source={require("../assets/clouds-3488632_1920.jpg")} style={imageStyle}>
        <View style={listContainer}>
          <FlatList
            data={Data}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
            ItemSeparatorComponent={() => <View style={{ backgroundColor: "black", height: 2 }} />}
            ListEmptyComponent={<Empty />}
          />
        </View>
        <View style={buttonRowStyle}>
          <View style={buttonContainerStyle}>
            <Button title="Current Weather" onPress={() => navigation.navigate('CurrentWeather')} color={buttonStyle.color} />
          </View>
          <View style={buttonContainerStyle}>
            <Button title="City" onPress={() => navigation.navigate('City')} color={buttonStyle.color} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "royalblue",
  },
  imageStyle: {
    flex: 1,
  },
  header: {
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    marginVertical: 20,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
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
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyText: {
    fontSize: 20,
    color: "gray",
  },
});

export default UpcomingWeather;
