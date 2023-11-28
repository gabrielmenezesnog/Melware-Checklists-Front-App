import React from 'react';
import {Platform, StatusBar, Text, View} from 'react-native';
import TextTicker from 'react-native-text-ticker';

// Styles;
import {white, dark} from './Styles';

// Redux
import {useSelector} from 'react-redux';
import {iDashboardHeader} from '../../../interface/dashboardHeader/iDashboardHeader';

const DashboardHeader: React.FC<iDashboardHeader> = ({title, subtitle}) => {
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const style = theme === 'dark' ? dark : white;

  return (
    <View style={style.mainContainer}>
      {Platform.OS === 'android' && <StatusBar hidden />}

      <TextTicker
        style={style.title}
        duration={10000}
        repeatSpacer={0}
        marqueeDelay={0}
        bounce
        loop>
        {title}
      </TextTicker>

      <Text style={style.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default DashboardHeader;
