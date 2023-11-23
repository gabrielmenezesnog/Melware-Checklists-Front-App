import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Views da stack
import {InitialStackStackNavigation} from '../initialStack/initialStack';
import {BottomTabs} from '../../bottomTabs/Index';

export const RootStackStackNavigation = ({loggedIn}: {loggedIn: boolean}) => {
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator
      initialRouteName={loggedIn ? 'Dashboard' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      {loggedIn ? (
        <RootStack.Screen name="BottomTabs" component={BottomTabs} />
      ) : (
        <RootStack.Screen
          name="CheckLists"
          component={InitialStackStackNavigation}
        />
      )}
    </RootStack.Navigator>
  );
};
