import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Views da stack
import Dashboard from '../../../views/privateStack/Dashboard/Dashboard';
import TaskList from '../../../views/privateStack/TaskList/TaskList';
import {
  RouteProp,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {defaultTheme} from '../../../theme/defaultTheme';

type PrivateStackParamsList = {
  Dashboard: undefined;
  TaskList: undefined;
};

type StackNavigatorProps = {
  navigation: any;
  route: RouteProp<PrivateStackParamsList, keyof PrivateStackParamsList>;
};

export const PrivateStackStackNavigation: React.FC<StackNavigatorProps> = ({
  navigation,
  route,
}: any) => {
  const InitialStack = createStackNavigator<PrivateStackParamsList>();

  const theme = useSelector((state: any) => state.themeReducer.theme);

  React.useLayoutEffect(() => {
    const tabHiddenRoutes = ['TaskList'];
    const focusedRouteName = getFocusedRouteNameFromRoute(route);

    if (focusedRouteName && tabHiddenRoutes.includes(focusedRouteName)) {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({
        tabBarStyle: {
          backgroundColor:
            theme === 'dark'
              ? defaultTheme.colors.gray.gray_g9
              : defaultTheme.colors.black.black_b1,
          height: defaultTheme.size.size_s60,
          borderRadius: defaultTheme.round.round_r6,
          marginHorizontal: defaultTheme.size.size_s20,
          marginBottom: defaultTheme.size.size_s12,
          position: 'absolute' as const,
          bottom: 10,

          elevation: 1,
        },
      });
    }
  }, [navigation, route, theme]);

  return (
    <InitialStack.Navigator
      initialRouteName="Dashboard"
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
      <InitialStack.Screen name="Dashboard" component={Dashboard} />
      <InitialStack.Screen name="TaskList" component={TaskList} />
    </InitialStack.Navigator>
  );
};
