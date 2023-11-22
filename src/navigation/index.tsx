/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// Stacks de navegação
import {RootStackStackNavigation} from './stack/rootStack/rootStack';

// Redux
import {useSelector} from 'react-redux';

export const Routes = () => {
  const isLoggedin = useSelector(
    (state: any) => state.authReducer.response?.loggedIn,
  );

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <RootStackStackNavigation loggedIn={isLoggedin} />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
