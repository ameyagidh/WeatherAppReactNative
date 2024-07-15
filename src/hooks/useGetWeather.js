import React, { useState, useEffect } from "react";
import {API_KEY} from "@env";

export const useGetWeather=()=>{
        const [loading, setLoading] = useState(false);
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
                console.log("latitude is ");
                console.log(latitude);
                console.log("longitude is ");
                console.log(longitude);
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
        return [loading, err, weather]    
}