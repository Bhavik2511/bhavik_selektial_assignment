import { Dimensions, Image, StyleSheet, Text, View, StatusBar} from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Login')
    }, 3000)
  },[])
  return (
    <View style={styles.container}>
      <Image 
      source={require('../Assets/swiggylogo.png')}
      style={styles.image}
      resizeMode="cover"
      />
      <StatusBar backgroundColor={'white'}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image:{
        width: 450,
        height: 450

    }
})