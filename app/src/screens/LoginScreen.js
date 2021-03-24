import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, ImageBackground } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomEditText from '../components/CustomEditText';
import FormLogin from '../components/FormLogin';
import {useNavigation}from '@react-navigation/native'
import { Cores } from '../constantes/Cores';
import { ScrollView } from 'react-native-gesture-handler';

export default function LoginScreen(){

    var data = new Date()
    console.log(data.getMonth()+1)
    const navigation = useNavigation()

    return(
        <ImageBackground style={{flex:1}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/tradingcardgameshop-ad1c3.appspot.com/o/sistema%2FServer%2Fserver%2FplanodefundoLogin.jpg?alt=media&token=0e56dd04-d0f1-4391-9c9b-c2f6e1518da8'}} blurRadius={5} >
            <View style={{width:'100%',alignItems:'center',marginVertical:20,justifyContent:'center',flex:1}}>
                <Image 
                style={{width:'80%',height:'80%'}}
                width={40}
                height={40}
                source={{uri:'https://media.discordapp.net/attachments/448159395096952832/822934076390113340/pngegg.png?width=512&height=499'}}
                />
            </View>
            <View style={{flex:1,justifyContent:'flex-start'}}>
                <ScrollView>
                    <FormLogin />
                </ScrollView>
            </View>
            
           
        </ImageBackground>
    )
}