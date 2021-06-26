import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Select Start > Settings >delete account change password these will be some of the settings</Text>
        
      </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
