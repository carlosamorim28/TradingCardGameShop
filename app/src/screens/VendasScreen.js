import React, { useState } from 'react'
import { Text, View,Image,Scroll, ScrollView,ImageBackground } from 'react-native'
import {useRoute} from '@react-navigation/native'
import NomePrecoDataContainerVendaScreen from '../components/NomePrecoDataContainerVendaScreen'
import DescricaoContainerVendasScree from '../components/DescricaoContainerVendasScree'
import ContatoVendedoContainerVendasScreen from '../components/ContatoVendedoContainerVendasScree'
import CustomButton from '../components/CustomButton'
import User from '../models/User'
import {ProdutoModel} from '../models/ProdutoModel'
import { FlatList } from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'
import firebase from 'firebase'
import { Docs } from '../constantes/Docs'

export default function VendasScreen(){
    const data = useRoute().params
    const user = data.user
    const produto = data.produto
    const [vendedor,setVendedor] = useState(user)
    const navigation = useNavigation()
    function venda(){
        var usuario = new User(user)
        var product = new ProdutoModel(produto)
        usuario.comprar({produtoComprado:product,navigation:navigation})
    }

    firebase.firestore().collection(Docs.users).doc(produto.vendedor).get().then((doc)=>{
        setVendedor(doc.data())
    })

    return(
        <ImageBackground style={{flex:1}} source={{uri:produto.imagemLink}} blurRadius={10}>
            <View style={{width:'100%',height:'40%',alignItems:'center',marginTop:'5%'}}>
                <Image source={{uri:produto.imagemLink}} style={{height:'100%',width:'90%'}} resizeMode='contain'/>
            </View>
            <ScrollView>
            <View style={{}}>
                <NomePrecoDataContainerVendaScreen produto={produto}/>
                <DescricaoContainerVendasScree produto={produto}/>
                <ContatoVendedoContainerVendasScreen user={vendedor} />
                <View style={{alignItems:'center'}}>
                    <CustomButton textobBotao='Comprar' onPress={venda}/>
                </View>
                
            </View>
            </ScrollView>
            
    </ImageBackground>
    )
}