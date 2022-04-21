import React from 'react';
import {StyleSheed, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={StyleSheed.container}>
      <Text>This is quizzler</Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create ({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});