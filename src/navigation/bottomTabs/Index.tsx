import React from 'react';

// Libs
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Navigations
import HomeIcon from '../../components/svg/icons/homeIcon/HomeIcon';
import {defaultTheme} from '../../theme/defaultTheme';
import {useSelector} from 'react-redux';
import {PrivateStackStackNavigation} from '../stack/privateStack/privateStackStac';

export const BottomTabs = () => {
  const Tab = createBottomTabNavigator();

  const theme = useSelector((state: any) => state.themeReducer.theme);

  const tabStyles = {
    tabBarShowLabel: false,
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
  };

  const getScreenOptions = ({route}: any) => ({
    ...tabStyles,

    header: () => null,
    tabBarIcon: ({focused}: {focused: boolean}) => {
      let icon;

      switch (route.name) {
        case 'DashboardBottom':
          icon = <HomeIcon active={focused} />;
          break;
      }

      return icon;
    },
  });

  return (
    <Tab.Navigator initialRouteName="DashboardBottom">
      <Tab.Screen
        name="DashboardBottom"
        component={PrivateStackStackNavigation}
        options={getScreenOptions}
      />
    </Tab.Navigator>
  );
};
