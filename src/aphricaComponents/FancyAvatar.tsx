import { View, Text, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const FancyAvatar = ({BorderColor,Title,IgBorder,ImageUrl,AvatarTitle,HasAvatarTitle, GradientStart,GradientEnd}:{BorderColor?:string,Title?:string,IgBorder?:boolean, HasAvatarTitle?:boolean, GradientStart?:string,GradientEnd?:string,AvatarTitle:string,ImageUrl:string}) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 80,
          height: 80,
        }}
      >
       {

HasAvatarTitle?
        <LinearGradient
        // Background Linear Gradient
        colors={[GradientStart?GradientStart:'orange',GradientEnd?GradientEnd:'yellow']}
        style={{
          width: 30,
          height: 16,
          borderRadius: 5,

          position: "absolute",
          zIndex: 3,
          bottom: 1,
          alignItems: "center",
          justifyContent: "center",
       
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 12,
        
          }}
        >
          {AvatarTitle}
        </Text>
      </LinearGradient>
      :
      null
       }

      {

        IgBorder?
        <View
        style={{
          width: 70,
          height: 70,
          position: "absolute",
          borderColor:BorderColor?BorderColor:'orange',
          borderWidth:2,
          borderRadius:40
        }}
      />
      :
      null
      }

        <Image
          source={{
            uri: ImageUrl,
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            borderWidth: 3,
          }}
        />
      </View>

      <Text style={{margin:5, fontSize:11}} >{Title}</Text>
    </View>
  );
};

export default FancyAvatar;
