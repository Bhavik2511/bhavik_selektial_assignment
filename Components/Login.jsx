import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const Login = ({ navigation }) => {
  const [number, setNumber] = useState('');
  const [Otp, setOtp] = useState('');

  useEffect(() => {
    if (Otp !== '') {
      console.log("Your OTP is:",Otp);
    }
  }, [Otp]);

  const loginHandler = () => {
    if (number.length === 10) {
      const code = Math.floor(100000 + Math.random() * 900000);
      setOtp(code);
      navigation.navigate('OtpScreen', { OTP: code, number: number });
    } else {
      alert('Please Enter a Valid Number');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar color={'white'} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.arrow} source={require('../Assets/back-arrow.jpg')} />
      </TouchableOpacity>
      <Text style={styles.header}>Enter your mobile number to get OTP</Text>
      <View style={styles.input}>
        <Text style={styles.numtext}>+91</Text>
        <TextInput
          style={styles.textinput}
          placeholder='10 digit mobile number'
          keyboardType='phone-pad'
          placeholderTextColor={'#171717'}
          maxLength={10}
          onChangeText={(text) => setNumber(text)}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontext} onPress={loginHandler}>
          Get OTP
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    height: '100%',
    paddingTop: 20,
  },
  arrow: {
    height: 20,
    width: 30,
  },
  header: {
    fontSize: 40,
    marginVertical: 20,
    color: '#171717',
    fontWeight: '800',
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1.5,
    borderColor: '#FC8019',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  numtext: {
    fontSize: 17,
    marginLeft: 10,
    color: '#777',
    fontWeight: '500',
    color: '#171717',
  },
  textinput: {
    marginLeft: 10,
    fontFamily: 'Arial',
    borderLeftWidth: 0.2,
    padding: 10,
    fontSize: 17,
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#FC8019',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttontext: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
});
