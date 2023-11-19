/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Stacks de navegação
import {RootStackStackNavigation} from './stack/rootStack/rootStack';

export const Routes = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <RootStackStackNavigation loggedIn={false} />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
