import React from 'react';
import { StyleSheet, Text, View, Image,ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FormCadastro from '../components/FormCadastro';
import { Cores } from '../constantes/Cores';

export default function RegisterScreen(){
    return(
        <ImageBackground style={{flex:1}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/tradingcardgameshop-ad1c3.appspot.com/o/sistema%2FServer%2Fserver%2FplanodefundoLogin.jpg?alt=media&token=0e56dd04-d0f1-4391-9c9b-c2f6e1518da8'}} blurRadius={2} >
            <View style={{flex:1,alignItems:'center',justifyContent:'center',padding:5}}>
            <Image 
                style={{width:'80%',height:'80%'}}
                width={40}
                height={40}
                source={{uri:'https://firebasestorage.googleapis.com/v0/b/tradingcardgameshop-ad1c3.appspot.com/o/sistema%2FServer%2Fserver%2Flogo.png?alt=media&token=1c6d9f1c-ef6f-4d17-9f0d-00c1f7ad35d5'}}
                />
            </View>
            <View style={{flex:2,justifyContent:'flex-start'}}>
                <ScrollView>
                    <FormCadastro/>
                </ScrollView>
            </View>
            
        </ImageBackground>
    )
}