import React,{useState} from 'react'
import { Text, ToastAndroid, View,FlatList } from 'react-native'
import {useRoute} from '@react-navigation/native'
import CustomEditText from './CustomEditText'
import CustomButton from './CustomButton'
import { ProdutoModel } from '../models/ProdutoModel'
import { pickImage } from '../constantes/FunctionsUploadImage'
import User from '../models/User'
import {useNavigation} from '@react-navigation/native'
import {filtros} from '../constantes/Filtros'
import {Cores} from '../constantes/Cores'

export function FormaddProduto({user}){
    const [nome,setnome] = useState()
    const [origem,setorigem] = useState()
    const [valor,setvalor] = useState()
    const [tipo,settipo] = useState()
    const [raridade,setraridade] = useState()
    const [imagemLink,setimagemLink] = useState()
    const [descricao,setdescricao] = useState()
    const [vendedor,setvendedor] = useState()
    const [bgBtnColors,setBgBtncolors] =useState([Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao,Cores.corDeFundoBotaoPadrao])
    
    const navigation = useNavigation()
    function cadastrarProduto(){
        if(nome&&origem&&valor&&tipo&&raridade){
            if(imagemLink){
                const produto = new ProdutoModel({nome:nome,origem:origem,valor:valor,tipo:tipo,raridade:raridade,imagemLink:imagemLink,descricao:descricao,vendedor:user.id})
                var usuario = new User(user)
                usuario.colocarAVenda({produtoVendido:produto,navigation:navigation})
            }else{
                alert('adicione uma imagem referente ao produto')
            }
        }else{
            alert('Preencha todos os campos')
        }
    }

    async function capturaImagem(){
        var uri = await pickImage({height:4,width:3,editable:true})
        if(uri != null){
            setimagemLink(uri)
        }
    }
    return(
        <View style={{alignItems:'center',width:'100%'}}>
            <CustomEditText value={nome} onChangeText={(text)=>{setnome(text)}} placeholder='nome'/>
            <CustomEditText value={origem} onChangeText={(text)=>{setorigem(text)}} placeholder='origem'/>
            <CustomEditText keyboardType='numeric' value={valor} onChangeText={(text)=>{setvalor(text)}} placeholder='Valor'/>
            <CustomEditText value={raridade} onChangeText={(text)=>{setraridade(text)}} placeholder='Raridade, caso o item não possua raridade preencha como nenhum'/>
            <CustomEditText value={descricao} onChangeText={(text)=>{setdescricao(text)}} placeholder='Descrição'/>
            <View style={{height:50,width:'80%'}}>
                <FlatList 
                    data={filtros({setTexto:settipo,setBgColors:setBgBtncolors})}
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
            <CustomButton textobBotao='Escolher Imagem' height={40} width={'80%'} onPress={capturaImagem}/>
            <CustomButton textobBotao='Cadastrar produto' height={40} width={'80%'} onPress={cadastrarProduto}/>
        </View>
    )
}