// import { View, Text } from 'react-native'
// import React from 'react'
// import IconCard from './IconCard'
// import { Entypo } from '@expo/vector-icons'
// import FancyAvatar from './FancyAvatar'
// import AInput from './AInput'
// import AButton from './AButton'
// import FlexibleImageCard from './FlexibleImageCard'

// const Showroom = () => {
//   return (
//     <View style={{

//         flex:1,
//         flexDirection:'column',
//         gap:10,
//         justifyContent:'center',
//         alignContent:'center',
//         padding:10
//     }}>
   
//    <Text style={{
//     color:'gray',
//     padding:15
//    }}>FancyAvatar</Text>
 
//  <FancyAvatar Title='Mark Zuckerberg'  AvatarTitle='live'  ImageUrl='https://www.forbesindia.com/media/images/2023/Nov/img_223547_cut057markzuckerbergbyguerinblaskforforbes_89171_final_bg.jpg' GradientStart='orange' GradientEnd='red' IgBorder={true} HasAvatarTitle={true}/>


//  <Text style={{
//     color:'gray',
//     padding:15
//    }}>AInput</Text>


//    <AInput PlaceHolder='Your Name'/>

//    <Text style={{
//     color:'gray',
//     padding:15
//    }}>AButton</Text>

//    <AButton Title="Press Me" CallBack={()=>{alert("I am Pressed")}}/>



//    <AInput PlaceHolder='Your Name'/>

// <Text style={{
//  color:'gray',
//  padding:15
// }}>FlexibleImageCard</Text>




//    <FlexibleImageCard >
//             <FlexibleImageCard.BoxImageCard
//               ImageUri={
//                 "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               }
//             />
//             <FlexibleImageCard.SectionTitle Title={"testing title"} />

//             <FlexibleImageCard.StarRating
//               NumberOfReviews={10}
//               ActiveStars={5}
//               InActiveStars={1}
//             />

//             <FlexibleImageCard.SocialStats Views={2} Likes={100} Downloads={20} />
//             <FlexibleImageCard.CardDescription Description={"testing"} />
//           </FlexibleImageCard>

//     </View>
//   )
// }

// export default Showroom









































import FlexibleImageCard from './FlexibleImageCard'






import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import IconCard from './IconCard'
import { Entypo } from '@expo/vector-icons'
import FancyAvatar from './FancyAvatar'
import AInput from './AInput'
import AButton from './AButton'
import { Dimensions } from 'react-native'
import Avatar from './Avatar'
import RecordAudio from './RecordAudio'
import ChatBox from './ChatBox'

const Showroom = () => {

  const width = Dimensions.get('screen').width
  return (
  <View style={{

    flex:1
  }}>


<Image resizeMode='contain' source={require('../assets/banner.jpg')} style={{

width:width+10,
height:300
}}/>

    

<View style={{alignItems:'center', justifyContent:'center',flex:1}}>

<ScrollView showsVerticalScrollIndicator={false}>

<View style={{

flex:1,
flexDirection:'column',
gap:10,
justifyContent:'center',
alignContent:'center',
padding:10,

}}>

<Text style={{
color:'gray',
padding:15
}}>FancyAvatar</Text>

<FancyAvatar Title='Mark Zuckerberg'  AvatarTitle='live'  ImageUrl='https://www.forbesindia.com/media/images/2023/Nov/img_223547_cut057markzuckerbergbyguerinblaskforforbes_89171_final_bg.jpg' GradientStart='orange' GradientEnd='red' IgBorder={true} HasAvatarTitle={true}/>


<Text style={{
color:'gray',
padding:15
}}>AInput</Text>


<AInput Width={180} BackgroundColor='#EBEBEB' PlaceHolder='Your Name'/>

<Text style={{
color:'gray',
padding:15
}}>AButton</Text>

<AButton width={160} BackgroundColor='#05251A' Title="Press Me" CallBack={()=>{alert("I am Pressed")}}/>

<Text style={{
color:'gray',
padding:15
}}>AButton</Text>

<AButton Color='#EE4F0A' width={160} BackgroundColor='white' BorderColor='#EE4F0A' Title="Press Me" CallBack={()=>{alert("I am Pressed")}}/>

<Text style={{
color:'gray',
padding:15
}}>Avatar</Text>
<Avatar  ImageUri='https://media.nature.com/lw767/magazine-assets/d41586-024-00394-0/d41586-024-00394-0_26705686.jpg?as=webp'/>

<View style={{

  height:50
}}/>



<Text style={{
 color:'gray',
 padding:15
}}>FlexibleImageCard</Text>




   <FlexibleImageCard >
            <FlexibleImageCard.BoxImageCard
              ImageUri={
                "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
            <FlexibleImageCard.SectionTitle Title={"testing title"} />

            <FlexibleImageCard.StarRating
              NumberOfReviews={10}
              ActiveStars={5}
              InActiveStars={1}
            />

            <FlexibleImageCard.SocialStats Views={2} Likes={100} Downloads={20} />
            <FlexibleImageCard.CardDescription Description={"testing"} />
          </FlexibleImageCard>

          
<Text style={{
 color:'gray',
 padding:15
}}>RecordAudio</Text>


<RecordAudio/>

<Text style={{
 color:'gray',
 padding:15
}}>RecordAudio</Text>



</View>
</ScrollView>
</View>
  </View>
  )
}

export default Showroom


