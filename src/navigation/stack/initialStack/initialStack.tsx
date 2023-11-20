import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Views da stack
import Login from '../../../views/initialStack/Login/Login';
import Checklists from '../../../views/initialStack/Checklists/Checklists';

export const InitialStackStackNavigation = () => {
  const InitialStack = createStackNavigator();

  return (
    <InitialStack.Navigator
      initialRouteName="Checklists"
      screenOptions={{
        headerShown: false,
      }}>
      <InitialStack.Screen name="Checklists" component={Checklists} />

      <InitialStack.Screen name="Login" component={Login} />
    </InitialStack.Navigator>
  );
};
