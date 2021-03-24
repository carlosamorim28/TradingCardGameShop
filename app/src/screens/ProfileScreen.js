import React,{useState} from 'react';
import { StyleSheet, Text, View,ImageBackground,Modal, TouchableOpacity } from 'react-native';
import {useRoute} from '@react-navigation/native'
import ContatoVendedoContainerVendasScreen from '../components/ContatoVendedoContainerVendasScree';
import ListaHorizontalCompraEVenda from '../components/ListaHorizontalCompraEVenda';
import { ScrollView } from 'react-native-gesture-handler';
import CustoModal from '../components/CustomModal';

export default function ProfileScreen({usuario=useRoute().params}){
    var user = usuario
    //console.log('userProfile:')
    //console.log(user)
    const [visible,setVisible]=useState(false)
    const [produtoSelecionado,setProdutoSelecionado] = useState({nome:'teste'})
    const [compraVenda,setCompraVenda] = useState(false)
    return(
        <ImageBackground style={{flex:1}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/tradingcardgameshop-ad1c3.appspot.com/o/sistema%2FServer%2Fserver%2Fplano%20de%20fundo.png?alt=media&token=b5c3ef93-e9a1-4f4c-978c-7a2ca1ddea1c'}} blurRadius={2}>
    
            <ContatoVendedoContainerVendasScreen  user={user} text={'Perfil'} />
            <ScrollView>
                <CustoModal venda={compraVenda} produto={produtoSelecionado} visible={visible} onPress={()=>{setVisible(!visible)}}/>
                <ListaHorizontalCompraEVenda  titulo='Produtos Vendidos' lista={user.vendas} func={setVisible} setProdutoSelecionado={setProdutoSelecionado} setCompraVenda={setCompraVenda} compraVenda={false}/>
                <ListaHorizontalCompraEVenda titulo='Produtos Comprados'lista={user.compras} func={setVisible} setProdutoSelecionado={setProdutoSelecionado} setCompraVenda={setCompraVenda} compraVenda={true}/>
            </ScrollView>
        </ImageBackground>
    
    )
}