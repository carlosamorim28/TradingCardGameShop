import React from 'react'
import { Text, View } from 'react-native'

export default function DescricaoContainerVendasScree({produto}){
    return(
        <View style={{width:'90%',margin:'5%',borderBottomWidth:1}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>Descrição</Text>
            <Text>{'\n'+produto.descricao}</Text>
        </View>
    )
}