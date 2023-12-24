import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/Login';
import OtpScreen from './Components/OtpScreen';
import Home from './Components/Home';
import SplashScreen from './Components/SplashScreen';

const Stack = createNativeStackNavigator();

function App() {




  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;

// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import Login from './Components/Login';
// import SplashScreen from './Components/SplashScreen';
// import OtpScreen from './Components/OtpScreen';
// import Home from './Components/Home';
//  function App() {
//     return (
//       <>
//       {/* <Login /> */}
//       {/* <SplashScreen /> */}
//       {/* <OtpScreen /> */}
//       <Home />
//       </>
//     );
//    }
//    export default App