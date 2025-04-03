// index.js

/**
 * @format
 */

import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {playbackService} from './src/services/musicPlayerServices'

TrackPlayer.registerPlaybackService(() => playbackService);
AppRegistry.registerComponent(appName, () => App);