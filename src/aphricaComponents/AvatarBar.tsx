import { View, Text } from 'react-native'
import React from 'react'
import Avatar from './Avatar'

const AvatarBar = ({ImageUri,Border,BorderColor, Title}:{ImageUri:string,Border?:true,BorderColor?:string,Title:string})=> {
  return (
    <View style={{

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:20
    }}>
      <Avatar Border={Border} BorderColor={BorderColor}  ImageUri={ImageUri}/>

      <Text style={{

        color:'gray'
      }}>{Title}</Text>
    </View>
  )
}

export default AvatarBar