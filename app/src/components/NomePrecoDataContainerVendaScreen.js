import React from 'react'
import { Text, View } from 'react-native'
 export default function NomePrecoDataContainerVendaScreen({produto}){
    return(
        <View style={{width:'90%',margin:'5%',borderBottomWidth:1}}>
            <Text style={{fontSize:30}}>R$:{produto.valor}</Text>
            <Text style={{fontSize:20}} >{produto.nome} edição do/a {produto.origem} </Text>
            <Text>{'\n'}Publicado em {produto.dataPublicacao}</Text>
        </View>
    )
 }