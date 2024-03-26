import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import {NavigationProp, useNavigation } from '@react-navigation/native';

import { CameraView, Camera } from "expo-camera/next";


export type Navigatable =NavigationProp<ReactNavigation.RootParamList >&{replace:(screen:string)=>{},navigate:(screen:string,NextScreenData?:{
  DataToReceive?:any
})=>{}}

 function BarcodeScanner() {
  const [hasPermission, setHasPermission] = useState<boolean |null>(null);
  const [scanned, setScanned] = useState(false);


const navigation:Navigatable = useNavigation()





useEffect(() => {
  const getCameraPermissions = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  getCameraPermissions();
}, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(false);
   


    navigation.navigate('Welcome',{DataToReceive:data});
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
       onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});



export default BarcodeScanner