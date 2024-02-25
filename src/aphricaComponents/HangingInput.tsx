import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import HangingNumber from './HangingNumber'

const HangingInput = ({PrimaryColor,SecondaryColor,Placeholder,Text,SetText}:{PrimaryColor?:string,SecondaryColor?:string,Placeholder?:string,Text:string,SetText:React.Dispatch<React.SetStateAction<string>>}) => {

  
  return (
    <View
        style={{
          width: 280,
          height: 70,
          backgroundColor: "white",
          elevation: 4,
          borderRadius: 10,
        }}
      >
        <TextInput

maxLength={4} 
          autoComplete="off"
          value={Text}
          onChangeText={(val) => {
            SetText(val);
          }}
          keyboardType="numeric"
          cursorColor={PrimaryColor?PrimaryColor:"#F12080"}
          placeholder={Placeholder}
          style={{
            fontSize: 20,
            paddingHorizontal: 30,
            height: 60,
            width: "100%",
            padding: 20,
            letterSpacing: 20,
            color: "white",

          }}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 60,
            position: "absolute",
            bottom: -75,
            right: 30,
          }}
        >
          <HangingNumber StringColor={SecondaryColor} EdgeColor={PrimaryColor} Character={Text[0] ? Text[0] : "*"} />
          <HangingNumber StringColor={SecondaryColor}   EdgeColor={PrimaryColor} Character={Text[1] ? Text[1] : "*"} />
          <HangingNumber StringColor={SecondaryColor}   EdgeColor={PrimaryColor} Character={Text[2] ? Text[2] : "*"} />
          <HangingNumber StringColor={SecondaryColor}   EdgeColor={PrimaryColor} Character={Text[3] ? Text[3] : "*"} />
        </View>
      </View>


  )
}

export default HangingInput