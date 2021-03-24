import React,{useState} from 'react'
import {ToastAndroid, View} from 'react-native'
import CustomButton from './CustomButton'
import CustomEditText from './CustomEditText'
import {useNavigation} from '@react-navigation/native'
import { Cores } from '../constantes/Cores'
import firebase from 'firebase'
import { Docs } from '../constantes/Docs'

export default function FormLogin(){
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const navigation = useNavigation()
    function logar(){
        firebase.auth().signInWithEmailAndPassword(email,senha).then(()=>{
            const user = firebase.firestore().collection(Docs.users).doc(email).get().then((user)=>{
                const usuario= user.data()
                navigation.navigate('HomePerfil',usuario)
            })
            
        }).catch((error)=>{
            console.log('erro: '+error.message)
            console.log('erro: '+error.code)
            switch(error.code){
                case 'auth/wrong-password':
                    ToastAndroid.show('A senha incorreta.',ToastAndroid.LONG)
                    break
                case 'auth/user-not-found':
                    ToastAndroid.show('O usuário não encontrado',ToastAndroid.LONG)
                    break;
                default:
                    ToastAndroid.show(error.message,ToastAndroid.LONG)
            }
            
        })
    }

    function esqueceuSenha(){
        alert('Entre em contato com nossa equipe atravez do email informando o problema\n\nEmail: tradingcardgameshopapp@gmail.com')
    }
    function btnCadastre_se(){
        navigation.navigate('RegisterScreen')
    }
    return(
        <View style={{width:'100%',alignItems:'center'}}>
            <CustomEditText placeholder ='E-mail' value={email} onChangeText={(text)=>{setEmail(text)}}/>
            <CustomEditText placeholder = 'Senha' ocultar={true} onChangeText={(text)=>{setSenha(text)}}/>
            <CustomButton textobBotao='Login' onPress={logar} height={40} width='80%'/>
            <View style={{flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}>
                <CustomButton textobBotao='cadastre-se' onPress={btnCadastre_se} width='35%' height={40}/>
                <CustomButton textobBotao='Esquceu a senha?' onPress={esqueceuSenha} width='35%' height={40}/>
            </View>
        </View>
    )
}