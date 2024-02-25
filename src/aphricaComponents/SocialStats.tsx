import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const SocialStats = ({Views,Likes,Downloads,IconColor,NumbersColor}:{Views:number,Likes:number,Downloads:number,IconColor?:string,NumbersColor?:string}) => {
  return (
    <View style={{
        flexDirection:'row',
        gap:5
    }}>
    
    <Ionicons name="ios-eye" size={15} color={IconColor?IconColor:"orange" }/>
    <Text  style={{
    
    color:NumbersColor?NumbersColor:'gray',
    fontSize:12
    }}>{Views}</Text>
    
    
    <Ionicons name="heart-sharp" size={15} color={IconColor?IconColor:"orange" } />
    <Text  style={{
    
    color:NumbersColor?NumbersColor:'gray',
    fontSize:12
    }}>{Likes}</Text>
    
    
    <MaterialIcons name="file-download" size={15} color={IconColor?IconColor:"orange" } />
    <Text  style={{
    
    color:NumbersColor?NumbersColor:'gray',
    fontSize:12
    }}>{Downloads}</Text>
    </View>
  )
}

export default SocialStats