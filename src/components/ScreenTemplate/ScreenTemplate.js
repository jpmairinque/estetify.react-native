import React from "react";
import {
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  View,
} from "react-native";
import colors from "../../styles/colors";

const ScreenTemplate = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.purple }}>
      <StatusBar backgroundColor={colors.purple} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1}}
      >
  
        {children}
       
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ScreenTemplate;
