import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  setFotoKTP } from '../../store/reducer/biodataReducer'
import { Image, View, Text, Dimensions} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { Button } from '@rneui/themed';
const WINDOW_WIDTH  = Dimensions.get('window').width;

export const FormUpload=()=> {
  const fotoKTP = useSelector((state) => state.biodata.fotoKTP)
  const dispatch = useDispatch();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      dispatch(setFotoKTP(result.assets[0].uri))
    }
  };

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      dispatch(setFotoKTP(result.assets[0].uri))
    }
  };


  return(
    <View>
      <Text style={{textAlign:'center', marginBottom:20}}>Pilih Foto KTP</Text>
        <View style={{
            alignItems:'center', 
            minHeight:300, 
            borderWidth:1,
            borderRadius:5,
            marginBottom:5
          }}>
          {fotoKTP && (
              <Image
                source={{ uri: fotoKTP }}
                style={{ width: WINDOW_WIDTH-70, height: 300 }}
              />
          )}
        </View>
      <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Button 
          title="Choose Photo" 
          color="primary"  
          icon={{
            name: 'image',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          onPress={pickImage} />

        <Button 
          title="Open Camera" 
          color="warning"
          icon={{
            name: 'camera',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          onPress={openCamera} />
      </View>
    </View>
  )
}