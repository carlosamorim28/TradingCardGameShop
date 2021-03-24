import React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'
import { Cores } from '../constantes/Cores'
import Produto from './Produto'



export default function ElementoLista({imagemLink,valor,imagemLink2,valor2,user,produto,setFiltro=()=>{},setSelected=()=>{}}){
    
    function renderisar({imagemLink,valor,imagemLink2,valor2}){
        if(imagemLink2==null || valor2==null){
            const produto1 = {
                nome:produto.nome,
                id:produto.id,
                origem:produto.origem,
                valor:produto.valor,
                tipo:produto.tipo,
                raridade:produto.raridade,
                imagemLink:produto.imagemLink,
                descricao:produto.descricao,
                vendedor:produto.vendedor,
                dataPublicacao:produto.dataPublicacao,
                vendido:produto.vendido,
            }
            return(
                <View style={{flexDirection:'row'}}>
                    <Produto user={user} produto={produto1} imagemLink={imagemLink} valor={valor}/>
                </View>
            )
        }else{
            const produto2 = {
                nome:produto.nome2,            
                id:produto.id2,                
                origem:produto.origem2,
                valor:produto.valor2,
                tipo:produto.tipo2,
                raridade:produto.raridade2,
                imagemLink:produto.imagemLink2,
                descricao:produto.descricao2,
                vendedor:produto.vendedor2,
                dataPublicacao:produto.dataPublicacao2,
                vendido:produto.vendido2,                
            }
            const produto1 = {
                nome:produto.nome,
                id:produto.id,
                origem:produto.origem,
                valor:produto.valor,
                tipo:produto.tipo,
                raridade:produto.raridade,
                imagemLink:produto.imagemLink,
                descricao:produto.descricao,
                vendedor:produto.vendedor,
                dataPublicacao:produto.dataPublicacao,
                vendido:produto.vendido,
            }
            return(
                <View style={{flexDirection:'row'}}>
                    <Produto setFiltro={setFiltro} setSelected={setSelected} user={user} produto={produto1} imagemLink={imagemLink} valor={valor}/>
                    <Produto setFiltro={setFiltro} setSelected={setSelected} user={user} produto={produto2} imagemLink={imagemLink2} valor={valor2}/>
                </View>
            )
        }
    }

       return(
        renderisar({imagemLink:imagemLink,valor:valor,imagemLink2:imagemLink2,valor2:valor2})
       )
    
}