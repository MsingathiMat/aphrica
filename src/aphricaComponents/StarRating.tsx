import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { NamedTupleMember } from 'typescript';





const StarRating = ({ActiveStars,NumberOfReviews,InActiveStars, Color}:{ActiveStars:number,InActiveStars:number,NumberOfReviews:number,Color?:string}) => {


    const RenderStars = ({Iteration,Element}:{Iteration:number,Element:React.ReactNode})=>{

        const Stars:React.ReactNode[] =[]
        for (let i = 1; i <= Iteration; i++) {
            Stars.push(Element);
    
        }
    
        return <>{Stars}</>
        
    }
  return (
    <View style={{

        flexDirection:'row',
        gap:5,
      
    }}>
    
{

RenderStars({Iteration:ActiveStars,Element:<Ionicons name="star" size={12} color={Color?Color:'orange'} />})


}

{

RenderStars({Iteration:InActiveStars,Element:<Ionicons name="star" size={12} color="gray" />})

}





    
  
    <Text  style={{
    
    color:'gray',
    fontSize:10
    }}>{NumberOfReviews} Reviews</Text>
    </View>
  )
}

export default StarRating