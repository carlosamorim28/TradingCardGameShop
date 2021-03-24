import React from 'react'
import {FlatList, Text,View} from 'react-native'
import ElementoListaCompraEVenda from './ElementoListaCompraEVenda'

export default function ListaHorizontalCompraEVenda({titulo,lista=[],func = ()=>{},setProdutoSelecionado=()=>{},setCompraVenda=()=>{},compraVenda=false}){
    return(
        <View style={{width:'90%',marginLeft:'5%',marginBottom:'5%',}}>
            <Text>{titulo}</Text>
            
            <FlatList 
                data={lista}
                horizontal
                keyExtractor={(item,index)=>{
                    return(item.nome)
                    }}
                key={(item)=>{return item.nome}}
                renderItem={({item})=>{return(<ElementoListaCompraEVenda setProdutoSelecionado={setProdutoSelecionado} func={func} produto={item} setCompraVenda={setCompraVenda} compraVenda={compraVenda}/>)}}
            />
       </View>
    )
}