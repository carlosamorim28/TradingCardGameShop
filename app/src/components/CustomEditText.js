import React from 'react'
import {View,TextInput} from 'react-native'
import { Cores } from '../constantes/Cores'

export default function CustomEditText({placeholder,value,onChangeText,ocultar,keyboardType = 'default'}){
    return(
        <View style={{margin:5,height:40,width:'80%',backgroundColor:Cores.corDeFundoTextImput,borderRadius:50,paddingHorizontal:'2%'}}>
            <TextInput 
            placeholder={placeholder}
            style={{flex:1}}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry = {ocultar}
            keyboardType= {keyboardType}
            />
        </View>
    )
}