import * as ImagePicker from 'expo-image-picker'
import firebase from 'firebase'
import React from 'react'
import {ToastAndroid} from 'react-native'

export const pickImage = async ({height = 4,width = 4,editable=false}) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: editable,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      ToastAndroid.show('Imagem Carregda',ToastAndroid.LONG)
      return result.uri

    }else{
      ToastAndroid.show('Imagem Não Carregda',ToastAndroid.LONG)
        return null
    }
  };

export const uploadImage = async ({uri,imageId,categoria})=>{
      const response = await fetch(uri)
      const blob = await response.blob()
      
      var ref = await firebase.storage().ref().child(`images/${categoria}/`+imageId)
      return ref.put(blob)
  }