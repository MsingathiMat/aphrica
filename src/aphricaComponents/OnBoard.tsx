import { View, Text, ImageBackground, Dimensions } from 'react-native'
import React from 'react'


type ScreenProps={

    title:string,
    description:string,
    ImageUrl:string 
}
const OnBoard = ({ScreenInfo,ImageLocation}:{ScreenInfo:ScreenProps,ImageLocation:'LOCAL' | 'ONLINE'}) => {

type ImageLoc ={

}


    const ScreenWidth= Dimensions.get('screen').width
  return (
    <View >

<ImageBackground  resizeMode="cover" source={ImageLocation=='LOCAL'?require(ScreenInfo.ImageUrl):{uri:ScreenInfo.ImageUrl}} style={{

   height:'100%',
   width:ScreenWidth,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'black'
}}>

<View style={{backgroundColor:'rgba(0,0,0,0.6)',  height:'100%',
   width:ScreenWidth, position:'absolute'}}/>
<View style={{justifyContent:'center', alignItems:'center', zIndex:5}}>
  
<Text style={{color:'white', fontSize:30, fontWeight:'bold',marginBottom:10}}>{ScreenInfo.title}</Text>
<Text style={{color:'white', fontSize:18, }}>{ScreenInfo.description}</Text>
    
  </View> 
    </ImageBackground>    


    </View>
  )
}

export default OnBoard