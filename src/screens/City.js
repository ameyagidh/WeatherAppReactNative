
import React from "react";
import {View, Text, StyleSheet, StatusBar,ImageBackground, SafeAreaView} from "react-native"
import IconText from "./IconText";

const City = () => {
const {container, cityName, cityText, countryName, populationWrapper, populationText, riseSetText, riseSetWrapper, imageLayout, rowLayout} = styles;
return (
    <SafeAreaView style={container}>
        <Text>Hi</Text>
        <ImageBackground source={require("../assets/architecture-1868667_1920.jpg")} style={imageLayout}>
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
       <View style={[populationWrapper, rowLayout]}>
            <IconText iconName={"user"} iconColor={"red"} bodyText={"8000"} bodyTextStyles={populationText}/>
       </View>
        <View style={[riseSetWrapper, rowLayout]}> 
            <IconText iconName={"sunrise"} iconColor={"white"} bodyText={"Sunrise at 6:00:00 am"} bodyTextStyles={riseSetText}/>
            <IconText iconName={"sunset"} iconColor={"white"} bodyText={"Sunset at 7:00:00 pm"} bodyTextStyles={riseSetText}/>
        </View>
      </ImageBackground>
    </SafeAreaView>
)}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight | 0,
    },
    
    imageLayout:{
        flex:1,
    },

    cityName:{
        fontSize: 40,
    },
    
    countryName:{
        fontSize: 30,
    },
    
    cityText:{
        justifyContent: 'center',
        alignSelf: "center",
        fontWeight: "bold",
        color: "white"
    },

    populationWrapper:{
        justifyContent:"center",
        marginTop: 30,
    },
    populationText:{
        fontSize: 25,
        marginLeft: 7.5,
        color: "red",
        fontWeight: "bold",
    },

    riseSetWrapper:{
        justifyContent:"space-around",
        marginTop: 30,  
    },

    riseSetText:{
        fontSize: 15,
        color: "yellow",
        fontWeight: "bold"
    }, 
    rowLayout:{
       flexDirection: "row",
       alignItems: "center", 
    }

});

export default City;