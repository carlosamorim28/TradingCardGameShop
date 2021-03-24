import React from 'react'
import { Text, View,Image } from 'react-native'
import User from '../models/User'

export default function ContatoVendedoContainerVendasScreen({user,text='Informações do Vendedor',bgColor = 'none'}){

    var usuario = new User(user)

    return(
        <View style={{width:'90%',margin:'5%',borderBottomWidth:1,flexDirection:'row',paddingBottom:'2%',backgroundColor:bgColor}}>
            <Image
            style={{width:100,height:100,borderRadius:100}}
            source={{uri:user.fotoUri}} 
            />
            <View style={{marginLeft:'2.5%'}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>{text}</Text>
                <Text style={{fontWeight:'bold'}}>{'\nNome: '+user.nome}</Text>
                <Text style={{fontWeight:'bold'}}>{'E-mail: '+user.email}</Text>
                <Text style={{fontWeight:'bold'}}>{'Avaliação como vendedor: '+ usuario.getAvaliacaoVenda()}</Text>
                <Text style={{fontWeight:'bold'}}>{'Avaliação como comprador: '+ usuario.getAvaliacaoCompra()}</Text>
            </View>
        </View>
    )
}