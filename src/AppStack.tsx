// src\AppStack.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text } from 'react-native';
import WebPlayerScreen from './screens/WebPlayerScreen';
import MusicPlayerScreen from './screens/MusicPlayerScreen';

const Stack = createStackNavigator();

function AppStack(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#001d23' }, headerTintColor: '#fff' }}>
        <Stack.Screen
          name="MusicPlayer"
          component={MusicPlayerScreen}
          options={({ navigation }) => ({
            title: 'Native Player',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('WebPlayer')} style={{ marginRight: 15 }}>
                <Text style={{ color: '#fff' }}>WebView</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="WebPlayer"
          component={WebPlayerScreen}
          options={({ navigation }) => ({
            title: 'WebView Player',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('MusicPlayer')} style={{ marginRight: 15 }}>
                <Text style={{ color: '#fff' }}>Native</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
