import React,{useState,useEffect} from 'react'
import {Modal,View,Text,TouchableOpacity, ToastAndroid} from 'react-native'
import CustomEditText from './CustomEditText'
import firebase from 'firebase'
import { Docs } from '../constantes/Docs'
import User from '../models/User'
import CustomButton from './CustomButton'



export default function CustoModal({visible=false,onPress=()=>{},produto = {}, venda=true}){
    const [avaliacao,setAvalaiacao] = useState('')
    const [compraVenda,setCompraVenda] = useState('compra')
    function avaliar(){
        var avaliacaoNumero = parseInt(avaliacao)
        if(produto.avaliado != true){
            if(avaliacaoNumero>=1 && avaliacaoNumero <= 5){
                if(venda){
                    User.avaliarProdutosComprados({produto:produto,onpress:onPress,avaliacao:avaliacaoNumero})
                    
                }else{
                    User.avaliarProdutosVendidos({produto:produto,onpress:onPress,avaliacao:avaliacaoNumero})
                }
            }else{
                ToastAndroid.show('Digite um número de 1 a 5',ToastAndroid.LONG)
                console.log('teste')
                onPress()
            }
        }else{
            alert('Elemento já avaliado')
            onPress()
        }
        
        
    }
    
    useEffect(()=>{
        if(venda){
            setCompraVenda('o vendedor')
        }else{
            setCompraVenda('o comprador')
        }
    },[venda])
    return(
        <Modal animationType='fade' transparent={true} visible={visible}>
                <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',marginTop: 22,}}>
                    <View style={{margin: 20,backgroundColor: 'white',borderRadius: 20,padding: 35,alignItems: 'center',shadowColor: '#000',shadowOffset: {width: 0,height: 2,}}}>
                        <Text style={{}}>Avalie {compraVenda}  do {produto.nome}</Text>
                        <CustomEditText placeholder='Digite um valor para a nota, de 1 a 5' keyboardType='numeric' value={avaliacao} onChangeText={(text)=>{setAvalaiacao(text)}} />
                        <CustomButton textobBotao='Avaliar' onPress={avaliar} width={100} />
                    </View>
                </View>
            </Modal>
    )
}