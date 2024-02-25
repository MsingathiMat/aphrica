import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent,Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import OnBoard from './OnBoard';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

type ScreenProps={

    title:string,
    description:string,
    ImageUrl:string 
}

const OnBoardingScreen = ({ScreenArray,TransitionText,ImageLocation}:{ScreenArray:ScreenProps[],TransitionText:string,ImageLocation:'LOCAL' | 'ONLINE'}) => {

  const ScreenWidth = Dimensions.get('screen').width;
  const [currentSlide,setCurrentSlide] = useState(0);
  const FlatListRef = useRef<FlatList<ScreenProps> | null>(null);


  const handleNext = () => {
    const newIndex = currentSlide + 1;
    if (newIndex < ScreenArray.length) {
      setCurrentSlide(newIndex);
      FlatListRef.current?.scrollToIndex({ index: newIndex });
    }

    if (currentSlide===ScreenArray.length){

    alert('Route to your main Page')
    }
  };

  const handleSliding=(e:NativeSyntheticEvent<NativeScrollEvent>)=>{

    const newIndex = Math.round(e.nativeEvent.contentOffset.x / ScreenWidth);
   
    setCurrentSlide((current)=>newIndex);
  }
  return (
    <View style={{justifyContent:'center', alignItems:'center'}}>
   
   <FlatList 
   
   data={ScreenArray} 
ref={FlatListRef}
 onMomentumScrollEnd={(e)=>{handleSliding(e)}}
 
horizontal
 pagingEnabled
   renderItem={({item})=><OnBoard ImageLocation ={ImageLocation}ScreenInfo={item}/>}
  
   >


   </FlatList>
   <View style={{position:'absolute', bottom:280}}>


<View style={{flexDirection:'row', gap:10, justifyContent:'center', alignItems:'center'}}>

{ScreenArray.map((_,index)=>(

<View key={index} 
style={
 [{width:6, height:6, backgroundColor:'gray', borderRadius:100},(currentSlide===index)&&{backgroundColor:"orange",width:10, height:10}]
}>


</View>
))}

</View>
</View>
   <View style={{position:'absolute', bottom:100}}>


   <View style={{flexDirection:'row', gap:30, justifyContent:'center', alignItems:'center'}}>

 <TouchableOpacity onPress={handleNext}>

 <View style={{flexDirection:'row', gap:5, justifyContent:'center', alignItems:'center'}}>
<Text style={{color:'white', fontSize:20}}>{currentSlide===2?TransitionText:"Next"}</Text>
  <AntDesign style={{top:2}} name="arrowright" size={24} color="white" />
  </View>
 </TouchableOpacity>
   </View>
   </View>
    </View>
  )
}

export default OnBoardingScreen