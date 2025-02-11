// src\components\ControlCenter.tsx

import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ControlCenter = () => {
  const playBackState = usePlaybackState();

  // Next button
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  // Previous button
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  // Play / Pause Toggle
  const togglePlayback = async (playback: State) => {
    try {
      if (playback === State.Playing) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
    } catch (error) {
      console.error('Error toggling playback:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon name="skip-previous" size={40} color="#FFFFFF" />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playBackState)}>
        <Icon
          name={playBackState === State.Playing ? 'pause' : 'play-arrow'}
          size={75}
          color="#FFFFFF"
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon name="skip-next" size={40} color="#FFFFFF" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ControlCenter;
