import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Views da stack
import Checklists from '../../../views/initialStack/Checklists/Checklists';
import SignIn from '../../../views/initialStack/SignIn/SignIn';
import SignUp from '../../../views/initialStack/SignUp/SignUp';

export const InitialStackStackNavigation = () => {
  const InitialStack = createStackNavigator();

  return (
    <InitialStack.Navigator
      initialRouteName="Checklists"
      screenOptions={{
        headerShown: false,
        detachPreviousScreen: false,
        cardStyleInterpolator: ({current, layouts}) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}>
      <InitialStack.Screen name="Checklists" component={Checklists} />

      <InitialStack.Screen name="SignIn" component={SignIn} />
      <InitialStack.Screen name="SignUp" component={SignUp} />
    </InitialStack.Navigator>
  );
};
