import { View, Text } from 'react-native'
import React from 'react'
import AvatarBar from './AvatarBar'
import Avatar from './Avatar'
import AButton from './AButton'
import AInput from './AInput'
import FancyAvatar from './FancyAvatar'


const Showroom = () => {
  return (
    <View style={{

        flex:1,
        flexDirection:'column',
        gap:10,
        justifyContent:'center',
        alignItems:'center',
        padding:10
    }}>
   
   <Text style={{
    color:'gray',
    padding:15
   }}>FancyAvatar</Text>
 
 <FancyAvatar Title='Mark Zuckerberg'  AvatarTitle='live'  ImageUrl='https://static.theceomagazine.net/wp-content/uploads/2018/07/09114837/mark-zuckerberg.jpg' GradientStart='orange' GradientEnd='red' IgBorder={true} HasAvatarTitle={true}/>


 <Text style={{
    color:'gray',
    padding:15
   }}>AInput</Text>


   <AInput PlaceHolder='Your Name'/>

   <Text style={{
    color:'gray',
    padding:15
   }}>AButton</Text>

   <AButton Title="Press Me" CallBack={()=>{alert("I am Pressed")}}/>

   <Text style={{
    color:'gray',
    padding:15
   }}>Avatar</Text>

   <Avatar ImageUri='https://i.insider.com/65d3371da610a9069d5a5a47?width=700'/>


   <Text style={{
    color:'gray',
    padding:15
   }}>AvatarBar</Text>
   <AvatarBar ImageUri='https://i.insider.com/593ec35bc4adee1c008b5394?width=1000&format=jpeg&auto=webp' Border BorderColor='orange' Title="Matthew"/>

    </View>
  )
}

export default Showroom