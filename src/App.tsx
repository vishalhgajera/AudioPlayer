// src\App.tsx

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import AppStack from './AppStack';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <AppStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
