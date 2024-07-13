import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native"

const ListItem = (props, styles1)=>{
    const {dt_txt, min_, max_, weather_condition_ } = props
    const {item_, date_style, temp} = styles1
    return (
      <View style={item_}>
        {/* <Feather name={'sun'} size={50} color={'white '}/> */}
        <Text style={date_style}>{dt_txt}</Text>
        <Text style={temp}>{max_}</Text>
        <Text style={temp}>{min_}</Text>
        <Text  style={date_style}>{weather_condition_}</Text>
      </View>
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


  export default ListItem;