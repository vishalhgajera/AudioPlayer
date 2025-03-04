// src\components\MusicPlayer.tsx

import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import SongInfo from './SongInfo';
import SongSlider from './SongSlider';
import ControlCenter from './ControlCenter';
import { SafeAreaView } from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const MusicPlayer = () => {
  const [track, setTrack] = useState<Track | null>();

  useEffect(() => {
    async function fetchCurrentTrack() {
      await new Promise(resolve => setTimeout(resolve, 500)); // Delay to ensure tracks are added
  
      const currentTrackIndex = await TrackPlayer.getCurrentTrack();
      console.log("currentTrackIndex", currentTrackIndex); // Debug log
  
      if (currentTrackIndex !== null) {
        const currentTrack = await TrackPlayer.getTrack(currentTrackIndex);
        setTrack(currentTrack);
      }
    }
  
    fetchCurrentTrack();
  }, []);
  
  

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    switch (event.type) {
      case Event.PlaybackTrackChanged:
        const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
        setTrack(playingTrack);
        break;
    }
  });
  
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
              style={styles.albumArtImg}
              source={{uri: track?.artwork?.toString()}}
            />
          )}
        </View>
      </View>

      <SongInfo track={track} />
      <SongSlider />
      <ControlCenter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
});

export default MusicPlayer;
