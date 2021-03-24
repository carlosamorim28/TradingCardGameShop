import React,{useState} from 'react'
import { Button, View, TouchableOpacity,Text } from 'react-native'
import { Cores } from '../constantes/Cores'

export default function CustomButton({textobBotao,onPress,width='60%',height=30,bgColor=Cores.corDeFundoBotaoPadrao}){
    
    return(
        <TouchableOpacity onPress={onPress} style={{width:width,height:height,margin:5,backgroundColor:bgColor,borderRadius:40,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:Cores.corTextoBotao}}>{textobBotao}</Text>
        </TouchableOpacity>
    )
}