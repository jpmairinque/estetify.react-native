import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import ScreenTemplate from './src/components/ScreenTemplate/ScreenTemplate'
import { useFonts,Inter_900Black } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';


export default function App() {

  let [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

 
  if(fontsLoaded){
    return(  
    <ScreenTemplate>
      <Routes/>
    </ScreenTemplate>   
  )}else{
    return <AppLoading/>
  };
}
