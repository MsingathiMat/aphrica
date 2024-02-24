import { View, Text } from 'react-native'
import React, { Children } from 'react'
import { StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";


import IconLabel from "./IconLabel";
const IconCard = ({children,JustifyIcon, Icon,BackgroundColor,IconBackgroundColor}:{children:React.ReactNode,JustifyIcon?:"Left" | "Center" | "Right", Icon:React.ReactNode,BackgroundColor?:string,IconBackgroundColor?:string}) => {
  
  

  

  const numberOfChildren= Children.count(children)
  const childrenToArray = Children.toArray(children)


  
  return (
    <View
      style={{
      

        height:numberOfChildren==1?90:numberOfChildren==2?90:numberOfChildren==3?160:160,
        width: "auto",
     
       
        maxHeight:'auto',
        backgroundColor:BackgroundColor?BackgroundColor: "white",

        borderRadius: 10,
        flexDirection: "column",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",

        paddingTop: numberOfChildren==1?48: 60,
        paddingBottom: 30,
        paddingHorizontal: 20,
      }}
    >
      <View
        id="TopIconContainer"
        style={{
          width: 40,
          height: 40,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:IconBackgroundColor?IconBackgroundColor: "#946ED5",
          top: -20,
       
          transform: JustifyIcon=="Center"? [{ translateX: -20 }]:[{ translateX: 0 }],

        
          left: JustifyIcon=="Right"?"90%":JustifyIcon=="Center"?"50%":"10%",
       
        
          position: "absolute",
        }}
      >
       {Icon}
      </View>

     

    <View id="HorizolntalSplitter" style={{

      flexDirection:"row",
      gap:15
    }}>
    <View
          style={{
            flexDirection: "column",
            gap: 30,
            justifyContent: "center",
            alignItems: "flex-start",
   
            padding: 5,
          }}
        >
     
  
        </View>

        <View
          style={{
            flexDirection: "column",
            gap: 30,
            justifyContent: "center",
            alignItems: "flex-start",
   
            padding: 5,
          }}
        >
       
    
        </View>



    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },

  smallCirclePlane: {
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4FCD8D",
    paddingRight: 3,
    paddingBottom: 2,
  },
  smallCircle: {
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#946ED5",
  },
});

IconCard.IconLabel=IconLabel
export default IconCard;
