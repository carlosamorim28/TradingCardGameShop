import React, { useState } from 'react'
import {Image, Text,View} from 'react-native'
import firebase from 'firebase'
import { Docs } from '../constantes/Docs'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function ElementoListaCompraEVenda({produto,func=()=>{},setProdutoSelecionado=()=>{},setCompraVenda=()=>{},compraVenda=false}){
    const [vendedor,setVendedor] = useState('')
    firebase.firestore().collection(Docs.users).doc(produto.vendedor).get().then((doc)=>{
        var vendedor = doc.data().nome
        setVendedor(vendedor)
    })
    return(
        <TouchableOpacity style={{flexDirection:'row',borderWidth:4,marginHorizontal:5,backgroundColor:'#AAA',borderRadius:9}} onPress={()=>{
            func(true)
            setProdutoSelecionado(produto)
            setCompraVenda(compraVenda)

            
        }}>
            <Image style={{height:'100%',width:100,marginHorizontal:10}} resizeMode='contain' source={{uri:produto.imagemLink}}/>
            <View style={{justifyContent:'center'}}>
                <Text style={{color:'#000',width:200,fontWeight:'bold'}}>Nome:</Text>
                <Text style={{color:'#000',width:200}}>{produto.nome}</Text>
                <Text style={{color:'#000',width:200,fontWeight:'bold'}}>Origem:</Text>
                <Text style={{color:'#000',width:200}}>{produto.origem}</Text>
                <Text style={{color:'#000',width:200,fontWeight:'bold'}}>Descrição:</Text>
                <Text style={{color:'#000',width:200}}>{produto.descricao}</Text>
                <Text style={{color:'#000',width:200,fontWeight:'bold'}}>Vendedor:</Text>
                <Text style={{color:'#000',width:200}}>{vendedor}</Text>
                <Text style={{color:'#000',fontWeight:'bold',width:200}}>R$:{produto.valor}</Text>
            </View>
        </TouchableOpacity>
    )
}