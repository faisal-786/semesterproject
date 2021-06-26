import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ExploreScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Find Tour For me</Text>
        <Button
          title="create custom tour request"
          onPress={() => alert('custom tour request successfully created')}
        />
      </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
