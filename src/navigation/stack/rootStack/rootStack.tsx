import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Views da stack
import Dashboard from '../../../views/privateStack/Dashboard/Dashboard';
import {InitialStackStackNavigation} from '../initialStack/initialStack';

export const RootStackStackNavigation = ({loggedIn}: {loggedIn: boolean}) => {
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator
      initialRouteName={loggedIn ? 'Dashboard' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      {loggedIn ? (
        <RootStack.Screen name="Dashboard" component={Dashboard} />
      ) : (
        <RootStack.Screen
          name="CheckLists"
          component={InitialStackStackNavigation}
        />
      )}
    </RootStack.Navigator>
  );
};
