import React from 'react';
import Routes from './src/routes';
import ScreenTemplate from './src/components/ScreenTemplate/ScreenTemplate'
import { useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { AuthContextProvider } from './src/contexts/AuthContext';

export default function App() {

  let [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

 
  if(fontsLoaded){
    return(  
    <AuthContextProvider>
    <ScreenTemplate>
      <Routes/>
    </ScreenTemplate>   
    </AuthContextProvider>
  )}else{
    return <AppLoading/>
  };
}
