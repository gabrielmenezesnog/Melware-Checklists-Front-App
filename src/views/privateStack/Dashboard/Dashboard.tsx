import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

// Styles;
import {white, dark} from './Styles';

// Language
import i18n from '../../../i18n';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {TaskListActions} from '../../../store/reducers/taskList/getAllByUserId/Actions';

//Components
import DashboardHeader from '../../../components/headers/dashboardHeader/DashboardHeader';

export const Dashboard = () => {
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const style = theme === 'dark' ? dark : white;

  const authReducer = useSelector((state: any) => state.authReducer);
  const user = useSelector((state: any) => state.authReducer.response.response);
  const taskLists = useSelector((state: any) => state.taskListReducer.response);

  const dispatch = useDispatch();

  useEffect(() => {
    if (authReducer.loading === false) {
      dispatch(
        TaskListActions.getTaskLists({userId: user.id, token: user.token}),
      );
    }
  }, [dispatch, authReducer, user]);

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

        {taskLists?.length === 0 && (
          <Text style={style.taskListCard}>{i18n.t('dashboard.no_lists')}</Text>
        )}
      </View>
    </View>
  );
};

export default Dashboard;
