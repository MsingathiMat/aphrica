import { View, Text, Image } from "react-native";
import React from "react";
import { Dimensions } from "react-native"



// Change bar to container
const HorizontalSplitContainer = ({RightComponent,LeftComponent}:{RightComponent?:React.ReactNode,LeftComponent?:React.ReactNode}) => {

    const ScreenWidth= Dimensions.get('screen').width
  return (
    <View id="HeaderBarContainer" style={{

     
        width:ScreenWidth,
        flexDirection:'row',
        justifyContent:'space-between',
        height:60,
        alignItems:'center',
        paddingHorizontal:20,
     
    }}>
      
      <View id="LeftSection">

        {LeftComponent}
      
    

      </View>
      <View id="RightSection" style={{

        flexDirection:'row',
        gap:15
      }}>

{RightComponent}

      </View>
    </View>
  );
};

export default HorizontalSplitContainer;
