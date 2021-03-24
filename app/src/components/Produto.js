import React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'
import { Cores } from '../constantes/Cores'
import {useNavigation} from '@react-navigation/native'
import { Tipo } from '../constantes/ConstantesProdutos'

export default function Produto({imagemLink,valor,user,produto,setFiltro=()=>{},setSelected=()=>{}}){
    const navigation = useNavigation()
    
    return(
        <TouchableOpacity style={{backgroundColor:Cores.elementoLista, width:'40%',margin:'5%',height:260,borderRadius:5,borderWidth:10}} onPress={()=>{
            
           navigation.navigate('VendasScreen',{user:user,produto:produto})
        }}>
            <View style={{alignItems:'center',width:'100%',height:'90%',marginTop:'4%'}}>
                <Image
                style={{height:'100%',width:'90%'}}
                source={{uri: imagemLink}}
                />
            </View>
            <View style={{marginTop:'1%'}}>
                <Text style={{marginLeft:'7%', fontWeight:'bold'}}>R$: {valor}</Text>
            </View>
        </TouchableOpacity>
    )
}