

import React, { Dispatch } from 'react'

import * as ImagePicker from 'expo-image-picker';

const PickImageFromCamera =async (SetIsLoading:React.Dispatch<React.SetStateAction<boolean>>,CallBack:(ImageData:string)=>void) => {


        SetIsLoading(true)
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          base64:true,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });
    
        
      if(result){

       if(result.assets){

        if(result.assets[0].uri){
    
      
    
          const Base64 = `data:${result.assets[0].type};base64,${result.assets[0].base64}`
  
         CallBack(Base64)
         }
       }
      }

       SetIsLoading(false)

    

    
    }

export default PickImageFromCamera