import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar } from "react-native";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import { Feather } from "@expo/vector-icons";
import OurChildComponent from "./src/screens/OurChildComponent"; 
import City from "./src/screens/City";

const App = () => {
  return (
    <View style={styles.container}> 
    <CurrentWeather style={styles1} />
    <UpcomingWeather style={styles1}/>
    <City/>
    </View>
  )
     
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

}); 

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
    fontSize: 15,
  },
  date_style: {
      color:"black",
      fontSize: 15,
  },
  image_style:{
   flex: 1,

  }
});

export default App;