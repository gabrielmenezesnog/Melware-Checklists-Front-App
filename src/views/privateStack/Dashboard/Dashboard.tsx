import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

// Libs
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// Styles;
import {white, dark} from './Styles';

// Language
import i18n from '../../../i18n';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {TaskListActions} from '../../../store/reducers/taskList/Actions';

//Components
import DashboardHeader from '../../../components/headers/dashboardHeader/DashboardHeader';
import TaskListCard from '../../../components/cards/taskListCard/TaskListCard';
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';
import {defaultTheme} from '../../../theme/defaultTheme';

type PrivateStackParamList = {
  TaskList: {taskList: any};
};

type SignInScreenNavigationProp = StackNavigationProp<
  PrivateStackParamList,
  'TaskList'
>;

export const Dashboard = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const theme = useSelector((state: any) => state.themeReducer.theme);
  const updateResponse = useSelector(
    (state: any) => state.taskListReducer.updateResponse,
  );
  const deleteResponse = useSelector(
    (state: any) => state.taskListReducer.deleted,
  );
  const taskLists = useSelector((state: any) => state.taskListReducer.response);
  const {loading, response} = useSelector((state: any) => state.authReducer);

  const dispatch = useDispatch();
  const navigation = useNavigation<SignInScreenNavigationProp>();

  const {idUser, token} = response.response;
  const userName = response.response.person.name;

  const style = theme === 'dark' ? dark : white;

  const hasCheckListsContent = taskLists?.length > 0;

  useEffect(() => {
    if (loading === false) {
      dispatch(TaskListActions.getTaskLists({userId: idUser, token}));
    }
  }, [
    dispatch,
    loading,
    idUser,
    token,
    refreshing,
    updateResponse,
    deleteResponse,
  ]);

  const handleSelectList = (taskList: any) => {
    navigation.navigate('TaskList', {taskList});
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      style={{backgroundColor: defaultTheme.colors.white.white_w2}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[defaultTheme.colors.green.green_g6]}
        />
      }>
      <View style={style.mainContainer}>
        <DashboardHeader
          title={`${i18n.t('dashboard.hello')}, ${userName}`}
          subtitle={i18n.t('dashboard.what_you_gonna_do_today')}
        />

        <View style={style.listSection}>
          <View style={style.flexRow}>
            <View style={style.titleDetail} />
            <Text style={style.listSectionTitle}>
              {i18n.t('dashboard.your_lists')}
            </Text>
          </View>

          {hasCheckListsContent ? (
            taskLists?.map((taskList: any, index: number) => (
              <TaskListCard
                key={index}
                taskList={taskList}
                selectList={() => handleSelectList(taskList)}
              />
            ))
          ) : (
            <Text style={style.taskListCard}>
              {i18n.t('dashboard.no_lists')}
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
