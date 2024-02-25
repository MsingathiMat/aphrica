import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';

const ModernInput = ({BorderColor,Icon,Placeholder, InputValue,SetInputValue}:{BorderColor?:string,Icon?:React.ReactNode,Placeholder?:string,InputValue:string, SetInputValue:React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <View>
              <TextInput
                value={InputValue}
                onChangeText={(value) => {
                    SetInputValue(value);
                }}
                placeholder={Placeholder}
                style={{
                  borderBottomColor: BorderColor?BorderColor:'orange',
                  borderBottomWidth: 1,
                  width: 200,
                  paddingLeft: 30,
                  padding: 3,
                }}
              />

<View style={{ position: "absolute", top:1, left: 0 }}>

    {Icon}
</View>
            </View>
  )
}

export default ModernInput