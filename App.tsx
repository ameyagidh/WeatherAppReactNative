import React from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import CurrentWeather from "./src/components/CurrentWeather";
import UpcomingWeather from "./src/components/UpcomingWeather";
import { Feather } from "@expo/vector-icons";
import OurChildComponent from "./src/components/OurChildComponent";

const App = () => {
  return (
    <View style={styles.container}> 
    <CurrentWeather/>
    <UpcomingWeather/>
    </View>
  )
    
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },

})

export default App;