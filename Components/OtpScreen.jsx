import { Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState, useRef } from 'react';

const OtpScreen = ({ navigation, route }) => {
  const { number, OTP } = route.params;
  const [enteredOtp, setEnteredOtp] = useState(['', '', '', '', '', '']);
  const otpInputs = useRef(Array(6).fill(null));

  const formatOtp = (otp) => {
    return Array.from(String(otp)); // formats OTP

  };

  const handleContinue = () => {
    const enteredCode = enteredOtp.join('');
    const formattedOtp = formatOtp(OTP);

  //   console.log('Entered Code:', enteredCode);
  // console.log('Formatted OTP:', formattedOtp.join(''));

    if (enteredCode == formattedOtp.join('')) {
      navigation.navigate('Home');
    } else {
      alert('Incorrect OTP. Please try again.');
    }
  };

  const handleOtpChange = (index, value) => {
    const newEnteredOtp = [...enteredOtp];
    newEnteredOtp[index] = value;

    // to move on next TextInput
    if (index < 5 && value !== '') {
      otpInputs.current[index + 1].focus();
    }

    setEnteredOtp(newEnteredOtp);
  };

  return (
    <View style={styles.container}>
      <StatusBar color={'white'}/>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.arrow} source={require('../Assets/back-arrow.jpg')}/>
      </TouchableOpacity>
      <Text style={styles.header}>Verify with OTP sent to {number}</Text>
      <View style={styles.input}>
        {enteredOtp.map((digit, index) => (
          <View key={index} style={styles.otpWrapper}>
            <TextInput
              style={styles.otpInput}
              keyboardType='phone-pad'
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleOtpChange(index, value)}
              ref={(ref) => (otpInputs.current[index] = ref)}
            />
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

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
    fontSize: 37,
    marginVertical: 20,
    color:'#171717',
    fontWeight: '800',
  },
  input: {
    width: '100%', 
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  otpWrapper: {
    width: '14%',
    height: 60,
    borderColor: '#FC8019',
    borderWidth: 1.5,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpInput: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
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
  buttonText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: 'bold',
  },
});
