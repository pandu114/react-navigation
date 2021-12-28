import React from 'react';
import {View,Text, Button, StyleSheet,Image, Dimensions} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const OnboardingScreen = ({navigation}) =>{
    
    return(
        <Onboarding
        onSkip={()=> navigation.navigate('Login')}
        onDone={()=>navigation.navigate('Login')}
            pages={[
                {
                backgroundColor: '#fff',    
                image: <Image source={require('../Images/prabhas.jpg')} style={styles.image}/>,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../Images/prabhash.jpg')} style={styles.image}/>,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
               
            ]}
        />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    image:{
        width:windowWidth,
        height:windowHeight,
    }
})