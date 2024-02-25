import { View, Text } from 'react-native'
import React from 'react'

const HangingNumber = ({

    EdgeColor,
    textColor,
    RingColor,
    StringColor,
    Character,
  }: {
    EdgeColor?: string;
    textColor?: string;
  
    RingColor?: string;
    StringColor?: string;
    Character?: string;
  }) => {
    return (
      <View>
        <View
          style={{
            width: 15,
            height: 15,
            borderRadius: 7.5,
            backgroundColor:EdgeColor?EdgeColor: "#EE4F0A",
            position: "absolute",
            top: -5,
            right: -3,
          }}
        />
  
        <View
          style={{
            width: 5,
            height: 10,
            borderRadius: 5,
            backgroundColor:EdgeColor?EdgeColor: "#EE4F0A",
            position: "absolute",
            top: -2,
            right: 5,
            zIndex: 2,
          }}
        />
  
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: "white",
            position: "absolute",
            top: 57,
            right: -23,
            zIndex: 5,
            elevation: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#1A1A1A", fontSize: 26 }}>{Character}</Text>
        </View>
  
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: EdgeColor?EdgeColor: "#FF8C78",
            position: "absolute",
            top: 60,
            right: -23,
            zIndex: 4,
            elevation: 3,
          }}
        />
  
        <View
          style={{
            borderColor: StringColor?StringColor: "#FF7979",
            borderRightWidth: 2.5,
            borderTopWidth: 2.5,
            height: 90,
            width: 10,
  
            borderRadius: 20,
          }}
        />
      </View>
    );
  };
  

export default HangingNumber