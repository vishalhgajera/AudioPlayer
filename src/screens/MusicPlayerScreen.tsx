// src\screens\MusicPlayerScreen.tsx

import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { addTrack, setupPlayer } from '../services/musicPlayerServices';
import MusicPlayer from '../components/MusicPlayer';

function MusicPlayerScreen(): JSX.Element {
  const [isPlayerReady, setIsPaylerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPaylerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
      <MusicPlayer />
  );
}


export default MusicPlayerScreen;
