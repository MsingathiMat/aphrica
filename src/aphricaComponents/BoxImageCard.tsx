import { View, Text, Image } from 'react-native'
import React from 'react'

const BoxImageCard = ({ImageUri}:{ImageUri:string}) => {
  return (
    <View>
       <Image resizeMode='cover' style={{

width:160,
height:140,
borderRadius:10

}}   source={{ uri: ImageUri }}/>
    </View>
  )
}

export default BoxImageCard