import React from "react";
import {View, Text, StyleSheet, StatusBar,ImageBackground, SafeAreaView} from "react-native"
import IconText from "./IconText";

const RowText = (props) =>{
    const {message1, message2, message1Style, message2Style, containerStyles} = props
    return (
        <View style={containerStyles}>
        <Text style={message1Style}>{message1}</Text>
        <Text style={message2Style}>{message2}</Text>
      </View> 
    )
}

const styles = StyleSheet.create({

})

export default RowText;