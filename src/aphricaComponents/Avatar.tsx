import { View, Image } from 'react-native'
import React from 'react'

const Avatar = ({size,ImageUri,Border,BorderColor}:{size?:number,ImageUri:string,Border?:true,BorderColor?:string}) => {
  

  return (
    <View>
     

     <Image  source={{uri:ImageUri}} style={{


width: size?size:80,
height:size?size:80,
borderRadius:size?size/2:40,

borderColor:BorderColor?BorderColor:'white',
borderWidth:Border?1.5:0
     }}/>
    </View>
  )
}

export default Avatar