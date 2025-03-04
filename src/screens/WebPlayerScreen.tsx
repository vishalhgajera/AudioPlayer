// src\screens\WebPlayerScreen.tsx

import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

const WebPlayerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        style={{backgroundColor:'#001d23'}}
        source={{
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body style="background-color: #001d23; display: flex; justify-content: center; align-items: center; height: 100vh;">
              <audio controls style="width: 100%; max-width: 300px;">
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3">
                Your browser does not support the audio element.
              </audio>
            </body>
            </html>
          `,
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001d23',
  },
});

export default WebPlayerScreen;
