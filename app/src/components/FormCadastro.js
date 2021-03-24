import React,{useState} from 'react'
import { Button, ToastAndroid, View } from 'react-native'
import { pickImage, uploadImage } from '../constantes/FunctionsUploadImage'
import CustomButton from './CustomButton'
import CustomEditText from './CustomEditText'
import * as ImagePicker from 'expo-image-picker'
import firebase from 'firebase'
import { Docs } from '../constantes/Docs'
import User from '../models/User'
import {useNavigation} from '@react-navigation/native'
import { Tipo } from '../constantes/ConstantesProdutos'

export default function FormCadastro(){
    const [nome,setNome] = useState()
    const [email,setEmail]=useState()
    const [senha,setSenha]=useState()
    const [confirmarSenha,setConfirmarSenha] = useState()
    const [fotoLink,setFotoLink]=useState()
    const [numeroConta,setNumeroConta] = useState()
    const [numeroAgencia,setNumeroAgencia] = useState()
    const navigation = useNavigation()
    React.useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

    async function cadastrar(){
        if(!nome||!email||!senha||!confirmarSenha||!numeroConta||!numeroAgencia){
            alert('Por favor preencha todos os campos')
            return
        }else{
            if(!fotoLink){
                alert('Adicione Uma foto de perfil')
                return
            }
            if(senha==confirmarSenha){
                let user = new User({nome:nome,email:email,senha:senha,fotoUri:fotoLink,numeroConta:numeroConta,numeroAgencia:numeroAgencia})
                user.cadastraUsuario({navigation:navigation})
            }else{
                alert('As senhas não coinsidem, por favor verifique a senha')
            }
        }
    }


    async function capturaImagem(){
            const uri = await pickImage({editable:true})
        if(uri != null){
            setFotoLink(uri)
        }
    }

    
    return(
        <View style={{width:'100%',alignItems:'center'}}>
            <CustomEditText placeholder='Nome' value={nome} onChangeText={(text)=>{setNome(text)}} />
            <CustomEditText placeholder='E-mail' value={email} onChangeText={(text)=>{setEmail(text)}} />
            <CustomEditText placeholder='Senha' value={senha} ocultar={true}onChangeText={(text)=>{setSenha(text)}} />
            <CustomEditText placeholder='Confirmar a senha' ocultar = {true}value={confirmarSenha} onChangeText={(text)=>{setConfirmarSenha(text)}} />
            <CustomEditText keyboardType='numeric' placeholder='Numero de uma conta bancária' value={numeroConta} onChangeText={(text)=>{setNumeroConta(text)}} />
            <CustomEditText keyboardType='numeric' placeholder='Numero da agencia bancária' value={numeroAgencia} onChangeText={(text)=>{setNumeroAgencia(text)}} />
            <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}>
                <CustomButton textobBotao='Adicionar Foto' onPress={capturaImagem} width='35%' height={40}/>
                <CustomButton textobBotao='Cadastrar' onPress={cadastrar} width='35%' height={40}/>
            </View>
        </View>
       
    )
}