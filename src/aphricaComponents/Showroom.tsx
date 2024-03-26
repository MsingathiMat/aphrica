

import FlexibleImageCard from './FlexibleImageCard'

import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'

import { Entypo, MaterialIcons } from '@expo/vector-icons'
import FancyAvatar from './FancyAvatar'
import AInput from './AInput'
import AButton from './AButton'
import { Dimensions } from 'react-native'
import Avatar from './Avatar'
import RecordAudio from './RecordAudio'
import ChatBox from './ChatBox'
import { AntDesign } from '@expo/vector-icons';
import LoadingButton from '../aphricaComponents/LoadingButton'

import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import HangingInput from './HangingInput'
import OnBoardingScreen from './OnBoardingScreen'
import FilterBar from './FilterBar'
import ModernInput from './ModernInput'
import AvatarAndDetail from './AvatarAndDetail'

const ScreenArray=[
  {

    title:"Mark Zuckerberg",
    description:"Founder, chairman and CEO of Meta",
    ImageUrl:'https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg' 
  },

  {

    title:"Nelson Mandela",
    description:"Freedom Fighter",
    ImageUrl:"https://karsh.org/wordpress/wp-content/uploads/2017/06/Yousuf-Karsh-Nelson-Mandela-1990-1523x1960.jpg"
  },

  {

    title:"Sundar Pichai",
    description:"Google CEO",
    ImageUrl:'https://www.arabnews.com/sites/default/files/styles/n_670_395/public/main-image/2020/01/20/1936296-1211052725.jpg?itok=H3TIlQmH'
  },
  {

    title:"Muhammad Ali",
    description:"The Greates",
    ImageUrl:'https://miro.medium.com/v2/resize:fit:1110/0*SQ5SDyW9ajgHyBxf.jpg'
  },
  {

    title:"Matthew Msingathi",
    description:"Software Developer",
    ImageUrl:'https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/fJz8YqnaQ0yVkTE8bVCE'
  },
  
  
 
  {

    title:"Trevor Noah",
    description:"Comedian",
    ImageUrl:'https://www.princeton.edu/sites/default/files/styles/scale_1440/public/images/2021/04/Trevor-Noah_CAA-Speakers_Photo-Credit-Gavin-Bond.jpg?itok=ilEPaXVg'
  }
  
]



const Showroom = () => {

const [InputText,SetInputText] = useState('')
const [Active,SetActive] = useState("")
const [Loading,SetIsLoading]=useState(false)

const [InputValue,SetInputValue] = useState("")

  const handleClick = (Title:string)=>{

    SetActive(Title)
    
  }
  

  const width = Dimensions.get('screen').width
  return (
  <View style={{

flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#E4E4E4'
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


}}>
<View style={{flex:1, padding:10, justifyContent:'center', alignItems:'center'}}>

  
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
}}>ModernInput</Text>

<ModernInput Icon={<MaterialIcons
              style={{ position: "absolute", top: 8, left: 0 }}
              name="email"
              size={15}
              color="orange"
            />} Placeholder='Your Email' BorderColor='orange' InputValue={InputValue} SetInputValue={SetInputValue} />





<Text style={{
color:'gray',
padding:15
}}>LoadingButton</Text>

<LoadingButton
                IsLoading={Loading}
                OnPress={() => {
             ()=>{ }

                }}
                Title="Login"
                BakcgroundColor="white"
                BtnColor="#128C7E"
                IndicatorColor="#128C7E"
              >

              </LoadingButton>


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
                "https://i.insider.com/593ec35bc4adee1c008b5394?width=1000&format=jpeg&auto=webp"
              }
            />
            <FlexibleImageCard.SectionTitle Title={"Drew Houston"} />

            <FlexibleImageCard.StarRating
              NumberOfReviews={10}
              ActiveStars={4}
              InActiveStars={2}
              RatingDescription="black"
            />

            <FlexibleImageCard.SocialStats Views={2} Likes={100} Downloads={20} />
            <FlexibleImageCard.CardDescription 
            
            Description={"Andrew W. Houston is an American Internet entrepreneur, and the co-founder and CEO of Dropbox, an online backup and storage service. According to Forbes, his net worth is about $2.2 billion. Houston held 24.4 percent voting power in Dropbox before filing for IPO in February 2018 "} />
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
 padding:15,
 marginTop:100
}}>FilterBar</Text>

<FilterBar ActiveColor="navy" BackgroundColor="orange" TextColor="white">


<FilterBar.FilterButton BackColor="orange" SelectedColor="green" ActiveItem ={Active} OnFilterPress={handleClick} Title="Coding"/>

<FilterBar.FilterButton BackColor="purple" SelectedColor="black" ActiveItem ={Active} OnFilterPress={handleClick} Title="Java"/>
<FilterBar.FilterButton Color="black" BackColor="gray" SelectedColor="yellow" ActiveItem ={Active} OnFilterPress={handleClick} Title="New to you"/>
<FilterBar.FilterButton BackColor="orange" SelectedColor="green" ActiveItem ={Active} OnFilterPress={handleClick} Title="HTNL"/>

<FilterBar.FilterButton BackColor="purple" SelectedColor="black" ActiveItem ={Active} OnFilterPress={handleClick} Title="PHP"/>
<FilterBar.FilterButton Color="black" BackColor="gray" SelectedColor="yellow" ActiveItem ={Active} OnFilterPress={handleClick} Title="SQL"/>


</FilterBar>
</View>
<Text style={{
 color:'gray',
 padding:15,
 marginTop:100
}}>OnBoardingScreen</Text>


<View style={{

}}>

<OnBoardingScreen OnComplete={()=>{alert("Transition to Main Screen")}} TransitionText='Get started' ScreenArray ={ScreenArray}ImageLocation='ONLINE'/>

<Text style={{
color:'gray',
padding:15
}}>AvatarAndDetail</Text>

<AvatarAndDetail CallBackFunc={()=>{}} AvatarScale={1} RingScale={1.1} AvatarRing={true} RightComponent={true} width={400}BottomLine='The greatest' LastSeen='12:00' Title="Matthew" ImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7La67pwXxpB3SRfeDWGvS_6ZHWA4pWIpmvPnmHotqQZEgDbFIXBWFybdQ_ADy6twwrTIl'/>

</View>
</View>
</ScrollView>
</View>
  </View>
  )
}

export default Showroom


