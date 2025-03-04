// src\services\musicPlayerServices.js

import TrackPlayer, { Event, RepeatMode,    Capability,
    AppKilledPlaybackBehavior, } from "react-native-track-player";

import {playListData} from '../constants'

export async function setupPlayer() {
    try {
        // Check if TrackPlayer is already initialized
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack !== null) {
            console.log("TrackPlayer is already set up.");
            return true;
        }
    } catch (error) {
        console.log("TrackPlayer is not set up, initializing...");
    }

    try {
        // Setup TrackPlayer
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
            android: {
                appKilledPlaybackBehavior: AppKilledPlaybackBehavior.ContinuePlayback,
            },
            capabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.Stop,
            ],
            notificationCapabilities: [
                Capability.Play,
                Capability.Pause,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
                Capability.Stop,
            ],
            compactCapabilities: [Capability.Play, Capability.Pause],
        });

        console.log("TrackPlayer setup completed.");
        return true;
    } catch (error) {
        console.error("Error in setupPlayer:", error);
        return false;
    }
}

export async function addTrack() {
    try {
        const queue = await TrackPlayer.getQueue();
        console.log("Queue before adding:", queue);

        if (queue.length > 0) {
            console.log("Tracks already added.");
            return;
        }

        console.log("Adding tracks...");
        await TrackPlayer.add(playListData, 0);

        const newQueue = await TrackPlayer.getQueue();
        console.log("Queue after adding:", newQueue);

        if (newQueue.length > 0) {
            await TrackPlayer.skip(0);  // Set the first track
            console.log("Playback started with first track.");
        }

        await TrackPlayer.setRepeatMode(RepeatMode.Queue);
        console.log("Tracks added successfully.");
    } catch (error) {
        console.error("Error adding tracks:", error);
        throw error;
    }
}


export async function playbackService (){
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })

}