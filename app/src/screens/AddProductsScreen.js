import React from 'react'
import {View,Text,Image,ScrollView,ImageBackground} from 'react-native'
import { FormaddProduto } from '../components/FormAddProduto'
import {useRoute} from '@react-navigation/native'

export default function AddProductsScreen(){
    var user = useRoute().params
    return(
        <ImageBackground style={{flex:1}} source={{uri:'https://firebasestorage.googleapis.com/v0/b/tradingcardgameshop-ad1c3.appspot.com/o/sistema%2FServer%2Fserver%2Fwp2310990.jpg?alt=media&token=b8314d45-c15a-48aa-94f5-d608eab1566d'}} blurRadius={5}>
              <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Image 
                    style={{width:'70%',height:'100%'}}
                    width={40}
                    height={40}

                    source={{uri:'https://media.discordapp.net/attachments/448159395096952832/822934076390113340/pngegg.png?width=512&height=499'}}
                    />
                </View>
                <View style={{flex:2}}>
                    <ScrollView>
                        <FormaddProduto user={user} />
                    </ScrollView>
                </View>
        </ImageBackground>
    )
}