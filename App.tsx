import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import SoundPlayer from "react-native-sound-player";

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playAudio = () => {
    try {
      SoundPlayer.playUrl("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
      setIsPlaying(true);
    } catch (error) {
      console.log("Error playing audio:", error);
    }
  };

  const pauseAudio = () => {
    try {
      SoundPlayer.pause();
      setIsPlaying(false);
    } catch (error) {
      console.log("Error pausing audio:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={isPlaying ? pauseAudio : playAudio}>
        <Text style={styles.text}>{isPlaying ? "Pause" : "Play"}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{isPlaying ? "Playing..." : "Paused"}</Text>
    </View>
  );
};

export default AudioPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#1DB954",
    borderRadius: 50,
    padding: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
    marginTop: 10,
  },
});
