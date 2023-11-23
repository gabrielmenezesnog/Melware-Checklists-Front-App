import React from 'react';
import {Text, View} from 'react-native';

// Styles;
import {white, dark} from './Styles';
import {useSelector} from 'react-redux';
import DashboardHeader from '../../../components/headers/dashboardHeader/DashboardHeader';
import i18n from '../../../i18n';

export const Dashboard = () => {
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const style = theme === 'dark' ? dark : white;

  const user = useSelector((state: any) => state.authReducer.response.response);

  return (
    <View style={style.mainContainer}>
      <DashboardHeader
        title={`${i18n.t('dashboard.hello')}, ${user?.person?.name}`}
        subtitle={i18n.t('dashboard.what_you_gonna_do_today')}
      />

      <View style={style.listSection}>
        <View style={style.flexRow}>
          <View style={style.titleDetail} />
          <Text style={style.listSectionTitle}>
            {i18n.t('dashboard.your_lists')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
