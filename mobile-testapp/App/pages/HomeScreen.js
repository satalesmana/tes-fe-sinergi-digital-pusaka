import * as React from 'react';
import {SafeAreaView, StatusBar, View, Dimensions } from 'react-native';
import { FormBiodataWizard } from '../components/FormBiodataWizard'
import { AppBar } from "@react-native-material/core";

export default HomeScreen = () => {
  const Heigth = Dimensions.get('window').height
  return (
    <SafeAreaView>
       <StatusBar
        animated={true}
        backgroundColor="#004B40"
        barStyle="light-content"
        showHideTransition="fade"
        hidden={false} />
      <AppBar title="Form Biodata" color='#00695D'/>
      <View style={{height:Heigth}}>
        <FormBiodataWizard/>
      </View>
    </SafeAreaView>
  );
};
