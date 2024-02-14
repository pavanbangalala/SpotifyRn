import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import SafeAreaWrapper from './src/components/SafeAreaWrapper';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaWrapper>
        <View style={[styles.container]}>
          <View style={{backgroundColor: 'blue'}}>
            <Text style={{fontSize: 28, color: 'white'}}>Hello World</Text>
          </View>
        </View>
      </SafeAreaWrapper>
      <StatusBar barStyle={'light-content'} backgroundColor={'#202020'} />
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
