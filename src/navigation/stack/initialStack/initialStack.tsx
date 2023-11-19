import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Views da stack
import Login from '../../../views/initialStack/Login/Login';

export const InitialStackStackNavigation = () => {
  const InitialStack = createStackNavigator();

  return (
    <InitialStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <InitialStack.Screen name="Login" component={Login} />
    </InitialStack.Navigator>
  );
};
