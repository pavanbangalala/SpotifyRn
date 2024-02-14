import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../constants/Theme/Colors';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
