import React from 'react';
import {View,Text, Button, StyleSheet} from 'react-native'
const LoginScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text> Login screen</Text>
           
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})