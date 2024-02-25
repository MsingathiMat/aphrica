

import FlexibleImageCard from './FlexibleImageCard'

import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import IconCard from './IconCard'
import { Entypo } from '@expo/vector-icons'
import FancyAvatar from './FancyAvatar'
import AInput from './AInput'
import AButton from './AButton'
import { Dimensions } from 'react-native'
import Avatar from './Avatar'
import RecordAudio from './RecordAudio'
import ChatBox from './ChatBox'
import { AntDesign } from '@expo/vector-icons';

import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import HangingInput from './HangingInput'
import OnBoardingScreen from './OnBoardingScreen'


const ScreenArray=[

  {

    title:"User Respect",
    description:"Listen uninterupted",
    ImageUrl:"https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {

    title:"No Adverts",
    description:"Listen uninterupted",
    ImageUrl:'https://www.forbesindia.com/media/images/2023/Nov/img_223547_cut057markzuckerbergbyguerinblaskforforbes_89171_final_bg.jpg'
  },
  
  {

    title:"Contact Me",
    description:"hlazomatthew@gmail.com / www.matthewmsingathi.co.za",
    ImageUrl:'https://media.nature.com/lw767/magazine-assets/d41586-024-00394-0/d41586-024-00394-0_26705686.jpg?as=webp' 
  }
]

const Showroom = () => {

const [InputText,SetInputText] = useState('12345')

  const width = Dimensions.get('screen').width
  return (
  <View style={{

flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'gray'
  }}>


<Image resizeMode='contain' source={require('../assets/banner.jpg')} style={{

width:width,
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
}}>ChatBox</Text>

<ChatBox  MessageColor='white' SharpCorner='TopRight' TimeStampColor='white' TimeStamp='13:00' BackgroundColor='#FBAD19' 

Message='Contrary to popular belief, Lorem Ipsum is not simply random text. 

classical literature, discovered the undoubtable source. Lorem Ipsum comes 
from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
(The Extremes of Good and Evil) by Cicero, written in 45 BC. This book 
is a treatise on the theory of ethics, very popular during the Renaissance. 
The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line ' 


ChatIndicator={<AntDesign name="check" size={18} color="black" />}

ReactionIcon={<SimpleLineIcons name="emotsmile" size={18} color="black" />}
/>


<ChatBox  MessageColor='white' SharpCorner='TopLeft' TimeStampColor='white' TimeStamp='13:00' BackgroundColor='#11CC95' 

Message='Contrary to popular belief, Lorem Ipsum is not simply random text. 

classical literature, discovered the undoubtable source. Lorem Ipsum comes 
' 


ChatIndicator={<AntDesign name="check" size={18} color="black" />}

ReactionIcon={<Feather name="thumbs-up" size={18} color="black" />}

/>

<ChatBox  MessageColor='white'   BackgroundColor='#626B87' 

Message='Contrary to popular belief, Lorem Ipsum is not simply random text. 

classical literature, discovered the undoubtable source. Lorem Ipsum comes 
' 
/>

<Text style={{
 color:'gray',
 padding:15
}}>HangingInput</Text>
<HangingInput PrimaryColor="#F2110B" SecondaryColor="#FB7875" Text={InputText} SetText={SetInputText}/>

<Text style={{
 color:'gray',
 padding:15
}}>OnBoardingScreen</Text>


<View style={{

}}>

<OnBoardingScreen TransitionText='Get started' ScreenArray ={ScreenArray}ImageLocation='ONLINE'/>

</View>
</View>
</ScrollView>
</View>
  </View>
  )
}

export default Showroom


