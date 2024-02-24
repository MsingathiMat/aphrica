import { View, Text, TouchableOpacity } from "react-native";
import React from "react";


const AButton = ({
  Title,
  Color,
  BackgroundColor,
  hight,
  width,
  BorderColor,
  CallBack
}: {
  Title: string;
  BackgroundColor?: string;
  hight?: number;
  width?: number;
  BorderColor?: string;
  Color?:string,
  CallBack:()=>void
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        CallBack()
      }}
    >
      <View
        style={{
          backgroundColor: BackgroundColor?BackgroundColor:'#EE4F0A',
          width: width?width:100,
          height: hight?hight:45,
          borderRadius:10,
          justifyContent: "center",
          alignItems: "center",
          borderWidth:BorderColor?1:0,
          borderColor:BorderColor?BorderColor:'transparent'
        }}
      >
        <Text
          style={{
            color:Color?Color:'white',
          }}
        >
   {Title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AButton;
