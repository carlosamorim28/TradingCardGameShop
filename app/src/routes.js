import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';
import {NavigationContainer,useRoute} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import {Foundation} from '@expo/vector-icons'
import AddProductsScreen from './screens/AddProductsScreen';
import VendasScreen from './screens/VendasScreen';
import {createBottomTabNavigator}from '@react-navigation/bottom-tabs'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function HomePerfil(){
    const user = useRoute().params
    console.log('userRoute')
    console.log(user)
    return(
    <Tab.Navigator>
        <Tab.Screen component={HomeScreen} name='HomeScren' options={{tabBarLabel:'Home',tabBarIcon:()=>(<Foundation name={'home'} size={24} color={'black'} />)}} initialParams={user}/>
        <Tab.Screen component={ProfileScreen} name='ProfileScreen' options={{tabBarLabel:'Perfil',tabBarIcon:()=>(<Foundation name={'torso'} size={24} color={'black'} />)}} initialParams={user}/>
    </Tab.Navigator>
    )
}
export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle:{opacity:0.5}}}>
                <Stack.Screen component={LoginScreen} name='LoginScreen'/>
                <Stack.Screen component={HomePerfil} name='HomePerfil' options={({navigation,route})=>({headerRight: () => (
                    <TouchableOpacity style={{marginRight:10}} onPress={()=>{
                        navigation.navigate('AddProductsScreen',route.params)
                    }}>
                        <Foundation name="plus" size={24} color="blue" />
                    </TouchableOpacity>
                ),
                })}/>
                <Stack.Screen component={RegisterScreen} name='RegisterScreen' />
                <Stack.Screen component={AddProductsScreen} name='AddProductsScreen' />
                <Stack.Screen component={VendasScreen} name='VendasScreen' />
            </Stack.Navigator>
        </NavigationContainer>
    )
}