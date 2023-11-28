import React, {useCallback, useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';

// Libs
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

// Styles;
import {white, dark} from './Styles';
import {defaultTheme} from '../../../theme/defaultTheme';

// Language
import i18n from '../../../i18n';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {TaskListActions} from '../../../store/reducers/taskList/Actions';

//Components
import DashboardHeader from '../../../components/headers/dashboardHeader/DashboardHeader';
import TrashIcon from '../../../components/svg/icons/trashIcon/TrashIcon';
import EditIcon from '../../../components/svg/icons/editIcon/Editicon';
import InputModal from '../../../components/modal/InputModal/InputModal';
import ConfirmModal from '../../../components/modal/ConfirmModal/ConfirmModal';

interface iTaskList {
  route: {
    params: {
      taskList: any;
    };
  };
}

export const TaskList: React.FC<iTaskList> = ({route}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [value, setValue] = useState('');

  const taskListReducer = useSelector((state: any) => state.taskListReducer);
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const token = useSelector(
    (state: any) => state.authReducer.response.response.token,
  );

  const dispatch = useDispatch();

  const style = theme === 'dark' ? dark : white;
  const params = route.params.taskList;

  const taskListId = params.idTaskList;
  const title = taskListReducer?.updateResponse?.title || params.title;
  const date = moment(params.date).format('DD/MM/YYYY');

  const navigation = useNavigation();

  const loading = taskListReducer.loading;

  useEffect(() => {
    if (taskListReducer.deleted) {
      dispatch(TaskListActions.clearDeletedState());

      navigation.goBack();
    }
  }, [dispatch, navigation, taskListReducer.deleted]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleDeleteMode = () => {
    setIsDeleteMode(!isDeleteMode);
  };

  const saveEdit = () => {
    dispatch(
      TaskListActions.updateTaskList({
        taskListId: taskListId,
        taskList: {title: value},
        token,
      }),
    );

    setIsEditMode(false);
  };

  const deleteTaskList = () => {
    dispatch(
      TaskListActions.deleteTaskList({
        taskListId: taskListId,
        token,
      }),
    );

    setIsDeleteMode(false);
  };

  return (
    <>
      {isEditMode && (
        <>
          <InputModal
            title={i18n.t('taskList.edit_name')}
            placeholder={i18n.t('taskList.placeholder')}
            isEditMode={isEditMode}
            setIsEditMode={setIsEditMode}
            onPressSave={() => saveEdit()}
            value={value}
            setValue={setValue}
            loading={loading}
          />
        </>
      )}

      {isDeleteMode && (
        <>
          <ConfirmModal
            title={i18n.t('taskList.confirm_delete')}
            isActive={isDeleteMode}
            setIsActive={setIsDeleteMode}
            onPressConfirm={() => deleteTaskList()}
            onPressCancel={() => setIsDeleteMode(false)}
            loading={loading}
          />
        </>
      )}

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
          <View style={style.taskActions}>
            <Pressable onPress={() => handleEditMode()}>
              <EditIcon />
            </Pressable>

            <Pressable onPress={() => handleDeleteMode()}>
              <TrashIcon />
            </Pressable>
          </View>

          <DashboardHeader
            title={title}
            subtitle={`${i18n.t('taskList.created_in')} ${date}`}
          />

          <View style={style.listSection}>
            <View style={style.flexRow}>
              <View style={style.titleDetail} />
              <Text style={style.listSectionTitle}>
                {i18n.t('taskList.opened_items')}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default TaskList;
