import React from "react";
import {View, Text} from "react-native"

const OurChildComponent= (props) =>{
    const {message} = props;
    return(
        <View style={{height:200, width: 200, backgroundColor: "blue"}}>
            <Text>  
                Prop here {message}
            </Text> 
        </View>
    )
}

export default OurChildComponent;