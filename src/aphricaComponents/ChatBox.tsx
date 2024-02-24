import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ChatBox = ({
  ChatIndicator,
  ReactionIcon,
  Message,
  BackgroundColor,
  MessageColor,
  TimeStamp,
  TimeStampColor,
  SharpCorner
}: {
  ChatIndicator?:React.ReactNode;
  Message: string;
  BackgroundColor?: string;
  ReactionIcon?: React.ReactNode;
  TimeStamp?: string;
  MessageColor?:string,
  TimeStampColor?:string,
  SharpCorner?:'TopLeft' | 'TopRight'
}) => {
  return (
    <View
      style={{
        backgroundColor: BackgroundColor ? BackgroundColor : "white",
        padding: 13,
        paddingBottom: 19,
        borderRadius: 10,
        borderTopRightRadius: SharpCorner=='TopLeft'?10:SharpCorner=='TopRight'?0:10,
        borderTopLeftRadius: SharpCorner=='TopLeft'?0:SharpCorner=='TopRight'?10:10,
        width: "85%",
       
        borderColor: "#E4E4E4",
        borderWidth: 1,
        marginBottom: 25,
        marginHorizontal: 10,

      }}
    >
      <Text style={{color:MessageColor?MessageColor:'black'}}>{Message}</Text>

    {

      ReactionIcon?
      <View
      style={{
        backgroundColor: "white",
        width: 26,
        height: 26,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: -20,
        right: 0,
      }}
    >
      {ReactionIcon}
    </View>:null
    }
      <View
        style={{
          bottom: 6,
          right: 8,
          position: "absolute",
          flexDirection: "row",
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
    {

    TimeStamp?  
      <Text
    style={{
      fontSize: 11,
      color: TimeStampColor?TimeStampColor:'gray',
    }}
  >
    {TimeStamp}
  </Text>:null
    }

        {ChatIndicator?ChatIndicator:null}
      </View>
     {
        SharpCorner? <View
        style={SharpCorner=="TopLeft"?Styles.TopLeft:SharpCorner=="TopRight"?Styles.TopRight:{}}
      >

        
        <View
          style={{
            backgroundColor:  BackgroundColor ? BackgroundColor : "white",
            width: 20,
            height: 20,
            position: "absolute",
            top: -10,
            left: -13,
            zIndex: 1,
            transform: [{ rotate: "45deg" }],
            borderColor: "#E4E4E4",
            borderWidth: 1,
          }}
        ></View>
      </View>:null
     }
    </View>
  );
};



const Styles = StyleSheet.create({

TopLeft: {

  
    width:13,
    height:20,
    position:'absolute',
    left:-12,
  
    top:-1,
    zIndex:5,
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
   
    borderTopColor:'#E4E4E4',
    borderBottomColor:'rgba(0,0,0,0)',
    borderLeftColor:'rgba(0,0,0,0)',
    borderRightColor:'rgba(0,0,0,0)',
    borderWidth:1,
    transform:[{ scaleX: -1 }]
  
},
TopRight:{
    width: 13,
    height: 20,
    position: "absolute",
    right: -12,
    top: -1,
    zIndex: 5,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",

    borderTopColor: "#E4E4E4",
    borderBottomColor: "rgba(0,0,0,0)",
    borderLeftColor: "rgba(0,0,0,0)",
    borderRightColor: "rgba(0,0,0,0)",
    borderWidth: 1,
  }

})
export default ChatBox;
