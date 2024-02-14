import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import SafeAreaWrapper from './src/components/SafeAreaWrapper';

import {colors} from './src/constants/Theme/Colors';
import {textVariants} from './src/constants/Theme/TextVariants';
import Navigator from './src/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigator />
      <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
