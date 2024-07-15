// App.js
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import GestureControlledScreen from "./src/screens/GestureControlledScreen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ActivityIndicator, StyleSheet, View, PermissionsAndroid, Platform } from "react-native";
import Geolocation from '@react-native-community/geolocation';
import {API_KEY} from "@env";
const Stack = createNativeStackNavigator();

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}


const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [err, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setlat] = useState([]);
  const [lng, setlng] = useState([]);

  const fetchWeatherData = async()=>{
    try{
      console.log(`latitude is ${lat}, longtitude is ${lng}`);
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=0f41864152519b8d215c39cb34e144ac`);
      const data = await res.json();
      console.log(res);
      setWeather(data);
    }
    catch(error){
      setError("Could not fetch Weather");
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Location Permission",
              message: "This app needs access to your location",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the location");
            getLocation();
          } else {
            console.log("Location permission denied");
            setError('Permission to access location was denied');
          }
        } catch (err) {
          console.warn(err);
        }
      } else {
        getLocation();
      }
    };

    const getLocation = () => {
      setLoading(true);
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setlat(latitude);
          setlng(longitude);
          // console.log("latitude is ");
          // console.log(latitude);
          // console.log("longitude is ");
          // console.log(longitude);
          fetchWeatherData();
          setLoading(false);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    };

    requestLocationPermission();
  }, [lat, lng]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }

  // if (location) {
  //   console.log("Location is");
  //   console.log(location);
  // }

  if(weather){
    console.log("Weather is");
    console.log(weather);
  }
 

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CurrentWeather">
          <Stack.Screen name="CurrentWeather" component={CurrentWeather} />
          <Stack.Screen name="UpcomingWeather" component={UpcomingWeather} />
          <Stack.Screen name="City" component={City} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
