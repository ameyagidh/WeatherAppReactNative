import React from "react";
import { SafeAreaView, View, StyleSheet, Text, FlatList, StatusBar, ImageBackground, Image } from "react-native";

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

const Item = (props)=>{
    const {dt_txt, min_, max_, weather_condition_ } = props
    return (
      <View>
        {/* <Feather name={'sun'} size={50} color={'white '}/> */}
        <Text style={styles1.date_style}>{dt_txt}</Text>
        <Text style={styles1.temp}>{max_}</Text>
        <Text style={styles1.temp}>{min_}</Text>
        <Text  style={styles1.date_style}>{weather_condition_}</Text>
      </View>
    )
  }

  const Empty = ()=>{
    return (
      <View>
        <Text></Text>
      </View>
    )
  }

const UpcomingWeather = () =>{
    const renderItem = ({ item }) => (
        <Item
          dt_txt={item.dt_txt}
          min_={item.main.temp_min}
          max_={item.main.temp_max}
          weather_condition_={item.weather[0].main}
        />
      );
    return (
        <SafeAreaView style={styles1.container}>
            <Text style={styles1.item_2}>Upcoming Weather</Text>
            <ImageBackground source={require("../assets/clouds-3488632_1920.jpg")} style={styles1.image_style}>
            <View style={styles1.item_}>
            <FlatList data={Data} 
            renderItem={renderItem} 
            keyExtractor={(item)=>{item.dt_txt }}
            ItemSeparatorComponent={() => <View style={{ backgroundColor: "black", height: 2 }} ListEmptyComponent={<Empty/>}/>}/>
            </View>
        </ImageBackground>
        </SafeAreaView>
    )
}

const styles1 = StyleSheet.create({
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