import React from "react";
import { SafeAreaView, View, StyleSheet, Text, FlatList, StatusBar, ImageBackground, Image } from "react-native";
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

  const Empty = ()=>{
    return (
      <View>
        <Text></Text>
      </View>
    )
  }

const UpcomingWeather = (styles1) =>{
    const renderItem = ({ item }) => (
        <ListItem
          dt_txt={item.dt_txt}
          min_={item.main.temp_min}
          max_={item.main.temp_max}
          weather_condition_={item.weather[0].main}
        />
      );
    const {container, image_style, item_2, item_} = styles1
    return (
        <SafeAreaView style={container}>
            <Text style={item_2}>Upcoming Weather</Text>
            <ImageBackground source={require("../assets/clouds-3488632_1920.jpg")} style={image_style}>
            <View style={item_}>
            <FlatList data={Data} 
            renderItem={renderItem} 
            keyExtractor={(item)=>{item.dt_txt }}
            ItemSeparatorComponent={() => <View style={{ backgroundColor: "black", height: 2 }} ListEmptyComponent={<Empty/>}/>}/>
            </View>
        </ImageBackground>
        </SafeAreaView>
    )
}

const styles2 = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "royalblue"
    },
    item_:{
      padding:20,
      marginVertical:8,
      marginHorizontal: 16,
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      borderWidth: 5,
      backgroundColor: "orange"
    },
    item_2:{
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      borderWidth: 5,
      textAlign: 'center',
      fontSize: 20,
      backgroundColor:"royalblue"
    },
    temp: {
      color: "black",
      fontSize: 20,
    },
    date_style: {
        color:"black",
        fontSize: 15,
    },
    image_style:{
     flex: 1,

    }
});

export default UpcomingWeather;