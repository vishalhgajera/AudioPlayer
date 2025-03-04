// src\screens\MusicPlayerScreen.tsx

import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { addTrack, setupPlayer } from '../services/musicPlayerServices';
import MusicPlayer from '../components/MusicPlayer';
import { SafeAreaView } from 'react-native-safe-area-context';

function MusicPlayerScreen(): JSX.Element {
  const [isPlayerReady, setIsPaylerReady] = useState(false);

  async function setup() {
    try {
      let isSetup = await setupPlayer();
      console.log("isSetup", isSetup);
      
      if (isSetup) {
        await addTrack();
      }
  
      setIsPaylerReady(isSetup);
    } catch (error) {
      console.error("track setup error :",error);
      
    }
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
      <MusicPlayer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
})


export default MusicPlayerScreen;
