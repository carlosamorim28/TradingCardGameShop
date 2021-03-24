import React, { useState,useEffect } from 'react';
import { Button, StyleSheet, Text, View,FlatList,ImageBackground, ToastAndroid } from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import firebase from 'firebase'
import User from '../models/User';
import Produto from '../components/Produto'
import { Raridade, Tipo } from '../constantes/ConstantesProdutos';
import CustomButton from '../components/CustomButton';
import { filtros } from '../constantes/Filtros';
import ElementoLista from '../components/ElementoLista';
import { Docs } from '../constantes/Docs';
import { Cores } from '../constantes/Cores';
import { validate } from 'uuid';

export default function HomeScreen({usuario = useRoute().params}){
    const navigation = useNavigation()
    var user = usuario
    const [texto,setTexto] = useState(Tipo.todos)
    const [listaProdutos,setListaProdutos] = useState([])
    const [produtosApresentados,setProdutosApresentados] = useState([])
    const [controle,setControle] = useState(true)
    const [bgBtnColors,setBgBtncolors] =useState([Cores.corDeFundoBotaoSelecionado,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])

    console.log('userHome:')
    console.log(user)
    
    function filtrarLista(){
        switch(texto){
            case Tipo.carta:
                setProdutosApresentados(listaProdutos.filter((produto)=>{return ((produto.tipo == Tipo.carta)&&!produto.vendido)}))
                break;
            case Tipo.deck:
                setProdutosApresentados(listaProdutos.filter((produto)=>{return (produto.tipo == Tipo.deck&&!produto.vendido)}))
                break;
            case Tipo.lata:
                setProdutosApresentados(listaProdutos.filter((produto)=>{return (produto.tipo == Tipo.lata&&!produto.vendido)}))
                break;
            case Tipo.outro:
                setProdutosApresentados(listaProdutos.filter((produto)=>{return (produto.tipo == Tipo.outro&&!produto.vendido)}))
                break;
            case Tipo.capa:
                setProdutosApresentados(listaProdutos.filter((produto)=>{return (produto.tipo == Tipo.capa&&!produto.vendido)}))
                break;
            case Tipo.box:
                setProdutosApresentados(listaProdutos.filter((produto)=>{return (produto.tipo == Tipo.box&&!produto.vendido)}))
                break;
            case Tipo.playmat:
                setProdutosApresentados(listaProdutos.filter((produto)=>{return (produto.tipo == Tipo.playmat&&!produto.vendido)}))
                break;
            default:
                setProdutosApresentados(listaProdutos.filter((produto)=>{return(produto.vendido == false)}))
                break;
        }
    }
    async function preencheLista(){
        firebase.firestore().collection(Docs.produtos).onSnapshot((collection)=>{
            listaProdutos.length = 0
            produtosApresentados.length = 0
            setListaProdutos(listaProdutos)
            setProdutosApresentados(produtosApresentados)
            collection.forEach((doc)=>{
                const produto = doc.data()
                listaProdutos.push(produto)
                setListaProdutos([...listaProdutos])
                if(!produto.vendido){
                    if(texto == produto.tipo || texto==Tipo.todos){
                        produtosApresentados.push(produto)
                        setProdutosApresentados([...produtosApresentados])
                    }
                }
            })
        })
        //console.log(data2)
    }
    
    
    function modifica_lista2(listaProdutos){
        var lista = []
        var j=0
        for(var i=0;i<listaProdutos.length;i++){
            if(i%2==0){
                    if(listaProdutos[i+1] != null)
                    {
                        var j = i+1
                        listaProdutos[i]['nome2'] = listaProdutos[j]['nome']
                        listaProdutos[i]['id2'] = listaProdutos[j]['id']
                        listaProdutos[i]['origem2'] = listaProdutos[j]['origem']
                        listaProdutos[i]['valor2'] = listaProdutos[j]['valor']
                        listaProdutos[i]['tipo2'] = listaProdutos[j]['tipo']
                        listaProdutos[i]['raridade2'] = listaProdutos[j]['raridade']
                        listaProdutos[i]['imagemLink2'] = listaProdutos[j]['imagemLink']
                        listaProdutos[i]['descricao2'] = listaProdutos[j]['descricao']
                        listaProdutos[i]['vendedor2'] = listaProdutos[j]['vendedor']
                        listaProdutos[i]['dataPublicacao2'] = listaProdutos[j]['dataPublicacao']
                        listaProdutos[i]['vendido2'] = listaProdutos[j]['vendido']
                                       

                    }
                    lista.push(listaProdutos[i])
            }
        }
        //console.log(JSON.stringify(lista))
        return lista
    }

    function valida(){
        if(controle){
            preencheLista()
            setControle(false)
        }
    }
    valida()
    //atualizarLista()
    var dados3 = modifica_lista2(produtosApresentados)

    useEffect(()=>{
        
        filtrarLista()
    },[texto])

    return(
        <ImageBackground style={{flex:1}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/tradingcardgameshop-ad1c3.appspot.com/o/sistema%2FServer%2Fserver%2Fplano%20de%20fundo.png?alt=media&token=b5c3ef93-e9a1-4f4c-978c-7a2ca1ddea1c'}} blurRadius={2}>
           <View style={{height:50,borderBottomWidth:2,backgroundColor:'#000',opacity:0.5,elevation:10}}>
            <View style={{flex:1,opacity:1}}>
                <FlatList 
                    data={filtros({setTexto:setTexto,setBgColors:setBgBtncolors,all:true})}
                    horizontal
                    keyExtractor={(item,index)=>{
                        return(item.nome)
                        }}
                        key={(item)=>{return item.nome}}
                        renderItem={({item,index})=>{
                        return(
                            <CustomButton  width={100} bgColor={bgBtnColors[index]} textobBotao={item.nome} onPress={item.onPress}/>
                        )
                    }}
                />
            </View>
           </View>
                <View style={{flex:1}}>
                    <FlatList 
                    data={dados3}
                    renderItem={({item})=>{
                        return(
                            <ElementoLista setFiltro={setTexto} setSelected={setBgBtncolors} set user={user} produto={item} valor={item.valor} valor2={item.valor2} imagemLink={item.imagemLink} imagemLink2={item.imagemLink2} />
                        )
                    }}
                    />
                </View>
        </ImageBackground>
    )
}