import React from 'react';
import {View, Text} from 'react-native';

// Libs
import moment from 'moment';

// Styles;
import {white, dark} from './Styles';

// Redux
import {useSelector} from 'react-redux';

const TaskListCard = ({taskList}: any) => {
  const theme = useSelector((state: any) => state.themeReducer.theme);
  const style = theme === 'dark' ? dark : white;

  const title = taskList.title;
  const date = moment(taskList.dateCreated).format('DD/MM/YYYY');

  return (
    <View style={style.taskListCard}>
      <Text style={style.taskListTitle}>{title}</Text>
      <Text style={style.taskListDate}>{date}</Text>
    </View>
  );
};

export default TaskListCard;
