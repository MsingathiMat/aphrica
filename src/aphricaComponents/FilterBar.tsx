import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { Children, cloneElement, isValidElement, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import ColorMixer from "aphrica/src/Helpers/ColorMixer";;

type OriginalProps={SelectedColor?:string,Title:string, Color?:string,BackColor?:string}

const FilterBar = ({children,BackgroundColor, TextColor, ActiveColor}:{children:React.ReactNode,BackgroundColor?:string, TextColor?:string,ActiveColor?:string})=> {
  
  const ChildrenToArray= Children.toArray(children)

  let ClonedChildren:React.ReactNode[] =[]
  ChildrenToArray.map((child)=>{

    const childProps = (child as React.ReactElement<any>).props as OriginalProps;
     
  
    if (isValidElement(child )){
     
      if (BackgroundColor || TextColor || ActiveColor) {
        ClonedChildren.push(
          cloneElement(child, {
            ...child.props, // Spread original props first
            BackColor: BackgroundColor, // Apply BackColor
            Color: TextColor, // Apply TextColor
            SelectedColor: ActiveColor // Apply ActiveColor
          })
        );
      } else {
        ClonedChildren.push(child);
      }

  

    }else{

      alert("FilterBar child invalid")
    }

  })
  
  return (
    <View
      style={{
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,

        paddingHorizontal: 10,
      }}
    >
    




    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false} 
    >

    <View
    
    style={{
        flexDirection: "row",
        gap: 10,
      
        alignItems:'center',
       
      }}
    
    >

        
{ClonedChildren}
      

       

    </View>
        </ScrollView>
     
    </View>
  );
};

// const FilterButton =({ActiveItem,OnFilterPress,SelectedColor,Title,Color,BackColor}:{OnFilterPress:(Title:string)=>void,ActiveItem:string,SelectedColor?:string,Title:string, Color?:string,BackColor?:string})=>{
  const FilterButton =({ActiveItem,OnFilterPress,SelectedColor,Title,Color,BackColor}:{OnFilterPress:(Title:string)=>void,ActiveItem:string,SelectedColor?:string,Title:string, Color?:string,BackColor?:string})=>{

  return (

    <TouchableOpacity onPress={()=>{
     
      OnFilterPress(Title)
      
      }}>

    <View
        style={{
          backgroundColor: ActiveItem==Title?ColorMixer(SelectedColor?SelectedColor:BackColor?BackColor:'orange',SelectedColor?38:0):'orange',
          padding: 12,
          paddingHorizontal: 18,
          borderRadius: 10,
        }}
      >

       { ActiveItem===Title?
        <View style={{backgroundColor:SelectedColor?SelectedColor:'red',
        borderColor:'white',
        borderWidth:2,
        width:10,
        height:10,
        borderRadius:5,
        position:'absolute',
        top:4,
        left:4,
        
        }}/>: null


       }
        <Text
          style={{
            color: Color?Color:"white",
          }}
        >
          {Title}
        </Text>
      </View>
    </TouchableOpacity>
  )
 }

FilterBar.FilterButton=FilterButton
export default FilterBar;
