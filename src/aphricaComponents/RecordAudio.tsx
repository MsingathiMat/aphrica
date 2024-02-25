import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Audio } from 'expo-av';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const RecordAudio = () => {





    const [IsPlaying,SetIsPlaying] = useState(false);

 


    const [recording, setRecording] = useState<Audio.Recording | undefined>(undefined);
    const [permissionResponse, requestPermission] = Audio.usePermissions();
    const [ShowRecordingIcon,SetShowRecordingIcon] = useState(false);
    const [ShowSendRecIcon,SetShowSendRecIcon] = useState(false);
    const [audioDuration, setAudioDuration] = useState(0);
  const [audioPosition, setAudioPosition] = useState(0);
  const [IsSending,SetIsSending] = useState(false);

  
  const [sound,SetSound]=useState<Audio.Sound | null>()

  
    const [Uri,SetUri]= useState("")
  
  
    useEffect(() => {
        return sound
          ? () => {
            
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);









    const formatTime = (milliseconds:number) => {
        const minutes = Math.floor(milliseconds / 60000);
        const seconds = ((milliseconds % 60000) / 1000).toFixed(0);
        return `${minutes}:${parseInt(seconds) < 10 ? '0' : ''}${seconds}`;
      };
      const AudioProgressBar = ({ audioPosition, audioDuration }:{audioPosition:number, audioDuration:number}) => {
    
      let progressRatio=0;
        useEffect(() => {
          // Calculate the ratio of audio position to audio duration
           progressRatio = audioPosition / audioDuration;
      
        }, [audioPosition, audioDuration]);
      
        return (
          <View
          style={{
            width:`${(audioPosition/audioDuration)*100}%`,
            height:2,
            backgroundColor:'red'
          }}
          >
      
      
          </View>
        );
      };

    async function startRecording() {

        try {
          if (permissionResponse?.status !== 'granted') {
         
            await requestPermission();
          }
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
          });
    
          const { recording: newRecording } = await Audio.Recording.createAsync(
            Audio.RecordingOptionsPresets.HighQuality,
          );
    
          setRecording(newRecording);
      
        } catch (err) {
          console.error('Failed to start recording', err);
        }
      }


const PlaySound = async(SongUri:string)=>{

    SetIsPlaying(true)
    const { sound } = await Audio.Sound.createAsync({uri:SongUri},
        { shouldPlay: IsPlaying },
          (status) => {
             // @ts-expect-error
            if (status.didJustFinish) {
              (async () => {
                await sound?.stopAsync();
              })();
              SetIsPlaying(false);
            }
          }
        
        
        )

    SetSound(sound);

  
    await sound.playAsync();

}  



    
      async function stopRecording() {
        try {
      
          setRecording(undefined);
          await recording?.stopAndUnloadAsync();
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
          });
          const uri = recording?.getURI() as string;
          
        
          SetUri(uri);
       
   
        } catch (err) {
          console.error('Failed to stop recording', err);
        }
      }
    

  return (
 
    
   
    
<View style={{


}}>
 


 <View style={{


 }}>







   
<View style={[{
  flexDirection:'row',
  gap:10,
  position:'absolute',
  top:13,
  right:20
}]}>


</View>
</View>


<View style={[{

  justifyContent:'center',
  alignItems:'center',
  backgroundColor: '#128C7E',
  height:45,
  width:45,
  borderRadius:26,
}]}>

{ShowRecordingIcon&& <View style={{
  backgroundColor:'white',
  borderRadius:5,


  justifyContent:'center',
  alignItems:'center',
  position: 'absolute',
  top:-50,
  overflow:'hidden',
  height:40,
  width:40,
  elevation:3
  }}>



<Image  resizeMode='contain' source={(require('../assets/recording.gif'))}
style={{width:80, height:80}}

/>

</View>}

{ShowSendRecIcon&&

<View style={{

position: 'absolute',
top:-50,
flexDirection:'column',
gap:5
}}>



<TouchableOpacity onPress={()=>{ 
  
  PlaySound(Uri)
 

}} style={{
  backgroundColor:'white',
  borderRadius:5,


  justifyContent:'center',
  alignItems:'center',

  overflow:'hidden',
  height:40,
  width:40,
  elevation:3
  }}>



{IsPlaying?
  <MaterialCommunityIcons name="pause" size={24} color="black" />:
<Ionicons name="play" size={24} color="green" />
  


}

{formatTime(audioPosition)&&<Text style={{fontSize:6}}>{formatTime(audioPosition)} / {formatTime(audioDuration)}</Text>
}

<View style={{
  width:40,
  bottom:-2
  }}>
<AudioProgressBar audioPosition={audioPosition} audioDuration={audioDuration} />
</View>
</TouchableOpacity>



</View>

}

{ShowSendRecIcon?
<TouchableOpacity onPress={()=>{
  SetShowSendRecIcon(false)

}}>

    <View style={{

width:30,
height:30,

justifyContent:'center',
alignItems:'center'
}}>
<AntDesign name="close" size={20} color="white" />

    </View>

</TouchableOpacity>
:

<TouchableOpacity  onLongPress={()=>{
  
  startRecording()
  SetShowRecordingIcon(true)

}} onPressOut={()=>{
  stopRecording();
  SetShowRecordingIcon(false)
  SetShowSendRecIcon(true)
  
  }}  >
<FontAwesome5 name="microphone" size={20} color="white" />

</TouchableOpacity>
}


</View>
</View>
   
  )
  
}

export default RecordAudio