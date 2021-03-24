import {useNavigation} from '@react-navigation/native'

export const goToProduct = ()=>{
    const navigation = useNavigation()
    navigation.navigate('AddProductsScreen')
}