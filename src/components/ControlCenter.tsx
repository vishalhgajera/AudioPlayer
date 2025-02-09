import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import { IconButton } from 'react-native-paper';

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
        <IconButton icon="skip-previous" size={40} iconColor="#FFFFFF" />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playBackState)}>
        <IconButton
          icon={playBackState === State.Playing ? 'pause' : 'play'}
          size={75}
          iconColor="#FFFFFF"
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <IconButton icon="skip-next" size={40} iconColor="#FFFFFF" />
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
  },
});

export default ControlCenter;
