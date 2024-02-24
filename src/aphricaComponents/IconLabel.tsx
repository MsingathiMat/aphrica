import { View, Text } from 'react-native'
import React from 'react'


const IconLabel = ({children,BackgroundColor,Icon }:{children:React.ReactNode,BackgroundColor?:string,Icon:React.ReactNode}) => {
  return (
    <View>
       <View style={{
          flexDirection:'row',
          gap:5,
          justifyContent:'center',
          alignItems:'center',
      
        
          height:30
          }}>
        <View style={
          
           {
                width:30,
            height:30,
            borderRadius:100,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:BackgroundColor?BackgroundColor:"#946ED5",
            
              }
        }>
        
       {Icon}
        </View>
        
        <View style={{flexDirection:'column'}}>
      {children}
        </View>
        
        
        </View>
    </View>
  )
}


const Title =({children, Color}:{children:string,Color?:string})=>{

    return (
    
        <Text style={{color:Color?Color:"#946ED5"}}>{children}</Text>
    )
}

const SubTitle =({children, Color}:{children:string,Color?:string})=>{

    return (
    
    
        <Text style={{color:Color?Color:"gray",fontSize:10, top:-4}}>{children}</Text>
    )
}

IconLabel.Title=Title
IconLabel.SubTitle=SubTitle
export default IconLabel